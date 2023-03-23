import asyncHandler from "express-async-handler";
import Booking from "../models/bookingModel.js";

//@desc Create new booking
//@route POST /api/booking
//@access Private
const addBookingItems = asyncHandler(async (req, res) => {
    const { restaurantId, tableId, date, tableName, restaurantName, customerName, dateFrom, dateTo, image } = req.body;

    const booking = new Booking({
        user: req.user._id,
        restaurant: restaurantId,
        table: tableId,
        tableName: tableName,
        restaurantName: restaurantName,
        customerName: customerName,
        dateFrom: dateFrom,
        dateTo: dateTo,
        image: image
    });

    const createdBooking = await booking.save();

    if (createdBooking) {
        res.status(200).json({
            status: "SUCCESS",
            message: "Booking created successfully",
            booking: createdBooking,
        });
    } else {
        res.status(401).json({
            status: "FAILED",
            message: "Booking could not be created",
            booking: "",
        });
    }
});

//@desc GET booking by id
//@route GET /api/booking/:id
//@access Private
const getBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);

    if (booking) {
        res.json(booking);
    } else {
        res.status(404);
        throw new Error("Booking not found");
    }
});

//@desc Get logged in user bookings
//@route GET /api/bookings/mybookings
//@access Private
const getMyBookings = asyncHandler(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id });

    if (bookings) {
        res.status(200).json({
            status: "SUCCESS",
            message: "Bookings retrieved successfully",
            bookings: bookings,
        })
    }else{
        res.status(401).json({
            status: "FAILED",
            message: "No booking available",
            booking: "",
        });
    }

    // res.json(bookings);
});

export { addBookingItems, getBookingById, getMyBookings };
