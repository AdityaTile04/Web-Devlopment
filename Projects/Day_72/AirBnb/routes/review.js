const express = require("express");
const router = express.Router({ mergeParams: true });
const asyncErrorHandler = require("../utils/wrapAsync");
const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

//Reviews
// Post Route
router.post(
  "/",
  validateReview,
  asyncErrorHandler(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;

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
  isLoggedIn,
  isReviewAuthor,
  asyncErrorHandler(async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted Succesfully");
    res.redirect(`/listings/${id}`);
  })
);

module.exports = router;
