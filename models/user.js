const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  passwordHash: { type: String, required: true },
  city: String,
  postalCode: String,
  country: String,
  phone: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, default: false },
  resetPasswordOtp: Number,
  resetPasswordOtpExpires: Date,
  wishlist: [
    {
      tripId: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
      tripName: { type: String, required: true },
      tripImage: { type: String, required: true },
      tripPrice: { type: String, required: true },
    },
  ],
});

userSchema.index({ email: 1 }, { unique: true });

exports.User = model("User", userSchema);
