const { User } = require("../models/user");

// Get all users
exports.getUsers = async (_, res) => {
  try {
    const users = await User.find().select("name email id isAdmin");
    if (!users) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      "-passwordHash -resetPasswordOtp -resetPasswordOtpExpiry"
    );
    if (!user) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true }
    ).select("-passwordHash -resetPasswordOtp -resetPasswordOtpExpiry");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ type: error.type, message: error.message });
  }
};
