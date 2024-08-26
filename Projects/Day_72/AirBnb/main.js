const express = require("express");
const Listing = require("./models/listing");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const asyncErrorHandler = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const PORT = 4000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

async function connection() {
  await mongoose.connect("mongodb://localhost:27017/AirBnb");
}

connection()
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome home");
});

// Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// New Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create Route
app.post(
  "/listings",
  asyncErrorHandler(async (req, res, next) => {
    if (!req.body.listings) {
      throw new ExpressError(400, "send valid data for listing");
    }
    const newListings = new Listing(req.body.listing);
    await newListings.save();
    res.redirect("/listings");
  })
);

//Edit Route
app.get(
  "/listings/:id/edit",
  asyncErrorHandler(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route
app.put(
  "/listings/:id",
  asyncErrorHandler(async (req, res) => {
    if (!req.body.listings) {
      throw new ExpressError(400, "send valid data for listing");
    }
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listings");
  })
);

// Delete Route
app.delete(
  "/listings/:id",
  asyncErrorHandler(async (req, res) => {
    let { id } = req.params;
    const deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listings");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).render("Error.ejs", { err });
  // res.status(status).send(message);
});

app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
