const Listing = require("../models/listing");

exports.indexRoute = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

exports.newFormRoute = (req, res) => {
  res.render("listings/new.ejs");
};

exports.showRoute = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("listings/show.ejs", { listing });
};

exports.createListing = async (req, res, next) => {
  const newListings = new Listing(req.body.listing);
  await newListings.save();
  newListings.owner = req.user._id;
  req.flash("success", "New Listing Added");
  res.redirect("/listings");
};

exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

exports.updateListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  req.flash("success", "Listing Updated");
  res.redirect(`/listings/${id}`);
};

exports.deleteRoute = async (req, res) => {
  let { id } = req.params;
  const deleteListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Succesfully");
  res.redirect("/listings");
};
