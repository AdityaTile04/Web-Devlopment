// Using Express Router

const express = require("express");
const router = express.Router();
const asyncErrorHandler = require("../utils/wrapAsync");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../Schema");
const Listing = require("../models/listing");
const { isLoggedIn } = require("../middleware");

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  const errMsg = error.details.map((el) => el.message).join(",");
  if (error) {
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Index Route
router.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate("reviews")
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
});

// Create Route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  asyncErrorHandler(async (req, res, next) => {
    const newListings = new Listing(req.body.listing);
    await newListings.save();
    newListings.owner = req.user._id;
    req.flash("success", "New Listing Added");
    res.redirect("/listings");
  })
);

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route
router.put(
  "/:id",
  isLoggedIn,
  validateListing,
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated");
    res.redirect("/listings");
  })
);

// Delete Route
router.delete(
  "/:id",
  isLoggedIn,
  asyncErrorHandler(async (req, res) => {
    let { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Succesfully");
    res.redirect("/listings");
  })
);

module.exports = router;
