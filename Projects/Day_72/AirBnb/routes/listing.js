// Using Express Router

const express = require("express");
const router = express.Router();
const asyncErrorHandler = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../Schema");
const Listing = require("../models/listing");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

const listingController = require("../controllers/listing");

const multer = require("multer");
const storage = require("../cloudConfig");
const upload = multer({ storage });

router
  .route("/")
  .get(asyncErrorHandler(listingController.indexRoute))
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    asyncErrorHandler(listingController.createListing)
  );

// New Route
router.get("/new", isLoggedIn, listingController.newFormRoute);

router
  .route("/:id")
  .get(asyncErrorHandler(listingController.showRoute))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    asyncErrorHandler(listingController.updateListing)
  )
  .delete(isLoggedIn, asyncErrorHandler(listingController.deleteRoute));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  asyncErrorHandler(listingController.editListing)
);

module.exports = router;
