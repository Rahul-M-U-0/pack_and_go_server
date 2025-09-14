const { Trip } = require("../models/trip");
const { validationResult } = require("express-validator");

// Create a new trip
exports.createTrip = async (req, res) => {
  const errors = validationResult(req);
};

// Get all trips
exports.getTrips = async (req, res) => {};

// Get trips hosted by a specific user
exports.getMyHostedTrips = async (req, res) => {};

// Get trips joined by a specific user
exports.getMyJoinedTrips = async (req, res) => {};

// Get my bookmarked trips
exports.getMyBookmarkedTrips = async (req, res) => {};

// Bookmark trip
exports.bookmarkTrip = async (req, res) => {};

// Remove bookmark
exports.removeBookmark = async (req, res) => {};

// Get trip by ID
exports.getTripById = async (req, res) => {};

// Update trip by ID
exports.updateTripById = async (req, res) => {};

// Delete trip by ID
exports.deleteTripById = async (req, res) => {};

// Join a trip
exports.joinTrip = async (req, res) => {};
