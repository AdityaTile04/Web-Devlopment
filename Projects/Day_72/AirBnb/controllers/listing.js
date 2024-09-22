const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

exports.indexRoute = async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  } catch (error) {
    req.flash("error", "Could not fetch listings.");
    res.redirect("/");
  }
};

exports.newFormRoute = (req, res) => {
  res.render("listings/new.ejs");
};

exports.showRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: { path: "author" },
      })
      .populate("owner");

    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
  } catch (error) {
    req.flash("error", "Could not find the listing.");
    res.redirect("/listings");
  }
};

exports.createListing = async (req, res) => {
  try {
    const response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.img = { url: req.file.path, filename: req.file.filename };
    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();
    req.flash("success", "New Listing Added");
    res.redirect("/listings");
  } catch (error) {
    req.flash("error", "Could not create listing.");
    res.redirect("/listings/new");
  }
};

exports.editListing = async (req, res) => {
  const { id } = req.params;
  try {
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    res.render("listings/edit.ejs", {
      listing,
      originalImageUrl: listing.img.url.replace("/upload", "upload/w_250"),
    });
  } catch (error) {
    req.flash("error", "Could not fetch the listing for editing.");
    res.redirect("/listings");
  }
};

exports.updateListing = async (req, res) => {
  const { id } = req.params;
  try {
    let listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested does not exist!");
      return res.redirect("/listings");
    }

    Object.assign(listing, req.body.listing); // Update with new data

    if (req.file) {
      listing.img = { url: req.file.path, filename: req.file.filename };
    }

    await listing.save();
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    req.flash("error", "Could not update listing.");
    res.redirect(`/listings/${id}/edit`);
  }
};

exports.deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted Successfully");
    res.redirect("/listings");
  } catch (error) {
    req.flash("error", "Could not delete listing.");
    res.redirect("/listings");
  }
};
