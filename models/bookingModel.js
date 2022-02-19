import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Restaurant",
  },
  image: {
    type: String,
    required: false,
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  customerName: { type: String, required: true },
  restaurantName: { type: String, required: true },
  tableName: { type: String, required: true },
  isComplete: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateFrom: {
    type: Date,
    required: false,
  },
  dateTo: {
    type: Date,
    required: false,
  },
  time: {}

}, {
  timestamps: true,
});

// const bookingSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     bookingItem: {
//       name: { type: String, required: true },
//       chairs: { type: Number, required: true },
//       image: { type: String, required: true },
//       price: { type: Number, required: true },
//       restaurant: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "Restaurant",
//       },
//     },

//     locationAddress: {
//       address: { type: String, required: true },
//       city: { type: String, required: true },
//       postalCode: { type: String, required: true },
//       country: { type: String, required: true },
//     },
//     paymentMethod: {
//       type: String,
//       required: true,
//     },
//     paymentResult: {
//       id: { type: String },
//       status: { type: String },
//       update_time: { type: String },
//       email_address: { type: String },
//     },
//     taxPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     totalPrice: {
//       type: Number,
//       required: true,
//       default: 0.0,
//     },
//     isPaid: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//     paidAt: {
//       type: Date,
//     },
//     isBookingComplete: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//     completedAt: {
//       type: Date,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
