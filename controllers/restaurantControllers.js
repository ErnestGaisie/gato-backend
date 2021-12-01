import Restaurant from "../models/restaurantModel.js"
import asyncHandler from "express-async-handler";

//@desc Fetch all products
//@route GET /api/products
//@access Public
const getRestaurants = asyncHandler(async (req, res) => {
    const restaurants = await Restaurant.find({});
  res.json({"restaurants": restaurants});
  });

export {getRestaurants};