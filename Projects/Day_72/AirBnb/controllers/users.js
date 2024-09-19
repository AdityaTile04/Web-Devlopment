const User = require("../models/user");

exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({
      email,
      username,
    });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "user registered succesfully");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

exports.login = async (req, res) => {
  req.flash("success", "Welcome back to AirBnb");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out now");
    res.redirect("/listings");
  });
};
