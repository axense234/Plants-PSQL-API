import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { client } from "../db/connect";

// GET ALL PLANTS
const getAllPlants = async (req: Request, res: Response) => {
  const foundPlants = await client.query("SELECT * FROM plant");

  if (foundPlants.rowCount === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not find any plants!", plants: [] });
  }

  return res.status(StatusCodes.OK).json({
    msg: "Successfully found plants!",
    nbHits: foundPlants.rowCount,
    plants: foundPlants.rows,
  });
};

// GET PLANT BY UID
const getPlantByUID = async (req: Request, res: Response) => {
  const { plantUID } = req.params;
  console.log(plantUID);

  if (plantUID === ":plantUID") {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter a plantUID!", plant: {} });
  }

  const foundPlant = await client.query(
    `SELECT * FROM plant WHERE plant_uid = '${plantUID}'`
  );

  if (foundPlant.rowCount === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: "Could not find the plant you wanted!",
      plant: foundPlant,
    });
  }

  return res.status(StatusCodes.OK).json({
    msg: `Successfully found a plant with the uid:${plantUID}`,
    plant: foundPlant.rows[0],
  });
};

// CREATE PLANT
const createPlant = async (req: Request, res: Response) => {
  const plantBody = req.body;

  if (!plantBody) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter plant details!", plant: {} });
  }

  // PLAYING AROUND A BIT WITH THE PLANT BODY
  let plantBodyQuery = "";
  const plantBodyArray = Object.values(plantBody);

  plantBodyArray.forEach((value, idx) => {
    const valueType: string | number =
      typeof value === "number" ? value : `'${value}'`;
    if (idx === plantBodyArray.length - 1) {
      plantBodyQuery = plantBodyQuery.concat(`${valueType}`);
    } else {
      plantBodyQuery = plantBodyQuery.concat(`${valueType}, `);
    }
  });

  console.log(plantBodyQuery);

  // CREATING THE PLANT
  await client.query(`INSERT INTO plant(plant_uid, familiar_name, scientific_name, plant_family, price, stock, discovery_date, primary_color)
  VALUES(uuid_generate_v4(), ${plantBodyQuery})
  `);

  // FINDING THE CREATED PLANT
  const createdPlant = await client.query(
    `SELECT * FROM plant WHERE scientific_name = '${plantBody.scientific_name}'`
  );

  if (createdPlant.rowCount === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not create the respective plant!", plant: {} });
  }

  return res.status(StatusCodes.CREATED).json({
    msg: `Successfully created plant with UID:${createdPlant.rows[0].plant_uid}`,
    plant: createdPlant.rows[0],
  });
};

// UPDATE PLANT BY UID
const updatePlantByUID = async (req: Request, res: Response) => {
  const { plantUID } = req.params;
  const plantBody = req.body;

  // PLAYING AROUND WITH THE PLANT BODY IN ORDER TO MAKE IT QUERIEABLE(IF THAT'S A WORD)
  let plantBodyQuery = "";
  const plantBodyPairs = Object.entries(plantBody);

  plantBodyPairs.forEach(([key, value], index) => {
    const valueType = typeof value === "number" ? value : `'${value}'`;
    if (index === plantBodyPairs.length - 1) {
      plantBodyQuery = plantBodyQuery.concat(`${key} = ${valueType}`);
    } else {
      plantBodyQuery = plantBodyQuery.concat(`${key} = ${valueType}, `);
    }
  });

  console.log(plantBodyQuery);

  // UPDATING THE ACTUAL PLANT
  await client.query(
    `UPDATE plant SET ${plantBodyQuery} WHERE plant_uid = '${plantUID}'`
  );

  // FINDING THE UPDATED PLANT
  const updatedPlant = await client.query(
    `SELECT * FROM plant WHERE plant_uid = '${plantUID}'`
  );

  if (updatedPlant.rowCount === 0) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: "Could not update the respective plant!", plant: {} });
  }

  return res.status(StatusCodes.OK).json({
    msg: `Successfully updated plant with the UID:${plantUID}`,
    plant: updatedPlant.rows[0],
  });
};

// DELETE PLANT BY UID
const deletePlantByUID = async (req: Request, res: Response) => {
  const { plantUID } = req.params;

  if (!plantUID) {
    return res.status(StatusCodes.BAD_GATEWAY).json({
      msg: "Please enter the UID of the plant you want to delete!",
      plant: {},
    });
  }

  // FINDING THE ACTUAL PLANT
  const deletedPlant = await client.query(
    `SELECT * FROM plant WHERE plant_uid = '${plantUID}'`
  );

  if (deletedPlant.rowCount === 0) {
    return res.status(StatusCodes.NOT_FOUND).json({
      msg: `Could not find a plant with the UID:${plantUID} in order to delete it!`,
      plant: {},
    });
  }

  // DELETING THE PLANT
  await client.query(`DELETE FROM plant WHERE plant_uid = '${plantUID}'`);

  return res.status(StatusCodes.OK).json({
    msg: `Successfully deleted plant with the UID:${plantUID}`,
    plant: deletedPlant.rows[0],
  });
};

export {
  getAllPlants,
  getPlantByUID,
  createPlant,
  updatePlantByUID,
  deletePlantByUID,
};
