import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  addBookingItems,
  getMyBookings,
  getBookingById,
} from "../controllers/bookingController.js";
const router = express.Router();

router.route("/").post(protect, addBookingItems);
router.route("/mybookings").get(protect, getMyBookings);
router.route("/:id").get(protect, getBookingById);

export default router;
