const express = require("express");
const tripController = require("../controllers/tripController");

const router = express.Router();
const { body } = require("express-validator");

const validateTrip = [];

router.post("/create-trip", validateTrip, tripController.createTrip);
router.get("/", tripController.getTrips);
router.get("/my-hosted-trips", tripController.getMyHostedTrips);
router.get("/my-joined-trips", tripController.getMyJoinedTrips);
router.get("/my-bookmarked-trips", tripController.getMyBookmarkedTrips);
router.post("/bookmark-trip", tripController.bookmarkTrip);
router.post("/remove-bookmark", tripController.removeBookmark);
router.get("/:id", tripController.getTripById);
router.put("/:id", tripController.updateTripById);
router.delete("/:id", tripController.deleteTripById);
router.post("/join-trip", tripController.joinTrip);
