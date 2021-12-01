import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "../data/users.js";
import restaurants from "../data/restaurants.js";
import Restaurant from "..//models/restaurantModel.js";
import User from "../models/userModel.js";
// import Order from "./models/orderModel.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    await Restaurant.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleRestaurants = restaurants.map((restaurant) => {
      return { ...restaurant, user: adminUser };
    });

    await Restaurant.insertMany(sampleRestaurants);

    console.log("Data Imported!".green.inverse);

    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);

    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
