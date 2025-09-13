const { Schema, model } = require("mongoose");

const tripSchema = Schema(
  {
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    type: {
      type: String,
      required: true,
      enum: [
        "Adventure",
        "Bike Ride",
        "Trekking",
        "Camping",
        "Leisure",
        "Cultural",
        "Wildlife",
        "Beach",
        "Mountain",
        "City",
        "Cruise",
        "Other",
      ],
    },
    fromLocation: {
      name: String,
      coordinates: { type: [Number], index: "2dsphere" },
    },
    toLocation: {
      name: String,
      coordinates: { type: [Number], index: "2dsphere" },
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    duration: { type: Number },
    slots: { type: Number, required: true },
    bookedSlots: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    images: [{ type: String }],
    itenary: [{ day: Number, activities: [String] }],
    status: {
      type: String,
      enum: ["Upcoming", "Ongoing", "Completed", "Cancelled"],
      default: "Upcoming",
    },
    joinedUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

exports.Trip = model("Trip", tripSchema);
