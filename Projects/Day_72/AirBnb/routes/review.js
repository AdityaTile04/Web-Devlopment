const express = require("express");
const router = express.Router({ mergeParams: true });
const asyncErrorHandler = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const { reviewSchema } = require("../Schema");

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  const errMsg = error.details.map((el) => el.message).join(",");
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Reviews
// Post Route
router.post(
  "/",
  validateReview,
  asyncErrorHandler(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listing._id}`);
  })
);

// Delete Review Route

router.delete(
  "/:reviewId",
  asyncErrorHandler(async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Succesfully");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
