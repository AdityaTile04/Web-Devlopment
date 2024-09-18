// Using Express Router

const express = require("express");
const router = express.Router();
const asyncErrorHandler = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../Schema");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const listingController = require("../controllers/listing");

// Index Route
router.get("/", asyncErrorHandler(listingController.indexRoute));

// New Route
router.get("/new", isLoggedIn, listingController.newFormRoute);

// Show Route
router.get("/:id", asyncErrorHandler(listingController.showRoute));

// Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  asyncErrorHandler(listingController.createListing)
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  asyncErrorHandler(listingController.editListing)
);

// Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  asyncErrorHandler(listingController.updateListing)
);

// Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  asyncErrorHandler(listingController.deleteRoute)
);

module.exports = router;
