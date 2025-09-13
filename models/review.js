const { Schema, model } = require("mongoose");

const reviewSchema = Schema(
  {
    trip: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
    reviewer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    host: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, trim: true },
  },
  { timestamps: true }
);

exports.Review = model("Review", reviewSchema);
