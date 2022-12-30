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
router.get("/plants/:plantUID", getPlantByUID);

router.post("/plants/create", createPlant);

router.patch("/plants/update/:plantUID", updatePlantByUID);

router.delete("/plants/delete/:plantUID", deletePlantByUID);

// Export
export default router;
