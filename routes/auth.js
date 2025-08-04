const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

const { body } = require("express-validator");

const validateUser = [
  body("name").not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Please enter a valied email address"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters")
    .isStrongPassword()
    .withMessage(
      "Password must contain atleast one uppercase, one lowercase, one symbol."
    ),
  body("phone")
    .isMobilePhone()
    .withMessage("Please enter a valied phone number"),
];

const validatePassword = [
  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters")
    .isStrongPassword()
    .withMessage(
      "Password must contain atleast one uppercase, one lowercase, one symbol."
    ),
];

router.post("/register", validateUser, authController.register);

router.post("/login", authController.login);

router.get("/verify-token", authController.verifyToken);

router.post("/forgot-password", authController.forgotPassword);

router.post("/verify-otp", authController.verifyPasswordResetOtp);

router.post("/reset-password", validatePassword, authController.resetPassword);

module.exports = router;
