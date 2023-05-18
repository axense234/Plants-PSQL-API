// Express
import express from "express";
// Controllers and Middleware
import {
  getAllPlants,
  getPlantByUID,
  createPlant,
  updatePlantByUID,
  deletePlantByUID,
} from "../controllers/plants";

const router = express.Router();

// Routes
router.get("/plants", getAllPlants);

/**
 * @swagger
 * /plants:
 *  get:
 *   description: Route for fetching all the plants.
 *   tags:
 *    - GET Routes
 *   responses:
 *    200:
 *     description: Successfully found plants.
 *    400:
 *     description: Could not find any plants.
 */

router.get("/plants/:plantUID", getPlantByUID);

/**
 * @swagger
 * /plants/{plantUID}:
 *  get:
 *   description: Route for fetching plant by id.
 *   tags:
 *    - GET Routes
 *   parameters:
 *    - in: path
 *      name: plantUID
 *      required: true
 *      description: The id of the plant you want to fetch.
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: Successfully fetched plant by id.
 *    404:
 *     description: Could not find the plant by id you wanted.
 *
 */

router.post("/plants/create", createPlant);

/**
 * @swagger
 * /plants/create:
 *  post:
 *   description: Route for creating a plant.
 *   tags:
 *    - POST Routes
 *   requestBody:
 *    description: The information of the plant you want to create
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#/components/schemas/Plant"
 *      examples:
 *       Plant:
 *        summary: A random plant example.
 *        value:
 *         familiar_name: "Juile"
 *         scientific_name: "Julio Postorio"
 *         plant_family: "Trees idk"
 *         price: 100
 *         stock: 200
 *         discovery_date: "12.05.2022"
 *         primary_color: "yellow"
 *   responses:
 *    201:
 *     description: Successfully created a plant.
 *    400:
 *     description: Something went wrong, check the received error message in the response body.
 *
 *
 */

router.patch("/plants/update/:plantUID", updatePlantByUID);

/**
 * @swagger
 * /plants/update/{plantUID}:
 *  patch:
 *   description: Route for updating a plant by id
 *   tags:
 *    - UPDATE Routes
 *   parameters:
 *    - in: path
 *      name: plantUID
 *      description: The id of the plant you want to update.
 *      required: true
 *      schema:
 *       type: string
 *   requestBody:
 *    description: The properties of the plant you want to update.
 *    content:
 *     application/json:
 *      schema:
 *       $ref: "#/components/schemas/Plant"
 *      examples:
 *       Plant:
 *        summary: Random plant primary_color example.
 *        value:
 *         primary_color: "blue"
 *   responses:
 *    200:
 *     description: Successfully updated the plant with the id.
 *    400:
 *     description: Something went wrong, check the received error message in the response body.
 *    404:
 *     description: Could not find the plant you want to update.
 */

router.delete("/plants/delete/:plantUID", deletePlantByUID);

/**
 * @swagger
 * /plants/delete/{plantUID}:
 *  delete:
 *   description: Route for deleting a plant.
 *   tags:
 *    - DELETE Routes
 *   parameters:
 *    - in: path
 *      name: plantUID
 *      description: The id of the plant you want to delete.
 *      required: true
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: Successfully deleted a plant with the id received.
 *    400:
 *     description: Something went wrong, check the received error message in the response body.
 *    404:
 *     description: Could not find the plant you want to delete with the id received.
 */

// Export
export default router;
