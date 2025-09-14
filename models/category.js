const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    description: { type: String, trim: true },
    icon: { type: String },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

exports.Category = model("Category", categorySchema);
