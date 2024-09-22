const express = require("express");
const router = express.Router();
const passport = require("passport");

const userController = require("../controllers/users");



// Middleware to save the redirect URL
const saveRedirectUrl = (req, res, next) => {
  if (req.session.returnTo) {
    res.locals.redirectUrl = req.session.returnTo;
    delete req.session.returnTo; // Clear it after using
  }
  next();
};

// Async error handler utility
const asyncErrorHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(asyncErrorHandler(userController.signup));

router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
