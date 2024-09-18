const express = require("express");
const router = express.Router({ mergeParams: true });
const asyncErrorHandler = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

const reviewController = require("../controllers/reviews");

//Reviews
// Post Route
router.post(
  "/",
  validateReview,
  asyncErrorHandler(reviewController.createReview)
);

// Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  asyncErrorHandler(reviewController.deleteReview)
);

module.exports = router;
