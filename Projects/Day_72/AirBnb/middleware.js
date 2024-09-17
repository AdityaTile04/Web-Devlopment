const Listing = require("./models/listing");
const Review = require("./models/review");
const { listingSchema, reviewSchema } = require("./Schema");
const ExpressError = require("./utils/ExpressError");

exports.isLoggedIn = (req, res, next) => {
  if (!res.isAuthenticated) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to create listing");
    return res.redirect("/login");
  }
  next();
};

exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  let listing = Listing.findById(id);
  if (!currUser && listing.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "you are not the owner of this listing");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

exports.validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  const errMsg = error.details.map((el) => el.message).join(",");
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  const errMsg = error.details.map((el) => el.message).join(",");
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  let review = Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "you are not the author of this review");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
