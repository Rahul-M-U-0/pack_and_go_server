const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true },
    bio: { type: String },
    avatar: { type: String },
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 },
    settings: {
      notifications: { type: Boolean, default: true },
      darkMode: { type: Boolean, default: false },
    },
    city: String,
    postalCode: String,
    country: String,
    phone: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
    resetPasswordOtp: Number,
    resetPasswordOtpExpires: Date,
    joinedTrips: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trip",
        required: true,
      },
    ],
    hostedTrips: [
      {
        type: Schema.Types.ObjectId,
        ref: "Trip",
        required: true,
      },
    ],
    wishlist: [
      {
        tripId: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
        tripName: { type: String, required: true },
        tripImage: { type: String, required: true },
        tripPrice: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

userSchema.index({ email: 1 }, { unique: true });

exports.User = model("User", userSchema);
