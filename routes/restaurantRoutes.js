import express from "express";
import {getRestaurants} from "../controllers/restaurantControllers.js"

const router = express.Router();

router.route("/").get(getRestaurants)

export default router;