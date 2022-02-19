import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import colors from "colors";
import userRoutes from "../routes/userRoutes.js"

//routes
import restaurantRoutes from "../routes/restaurantRoutes.js"
import bookingRoutes from "../routes/bookingRoutes.js"

const app = express();

//environment variables
dotenv.config();

connectDB();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
  });

  app.get("/", (req, res) => {
    res.send("API is running");
  });
  app.use("/api/users", userRoutes);
  app.use("/api/restaurants", restaurantRoutes);
  app.use("/api/bookings", bookingRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`.cyan.underline)
})