const User = require("../models/user");
const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

exports.signup = async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    req.flash("error", error.details.map((el) => el.message).join(", "));
    return res.redirect("/signup");
  }

  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "User registered successfully");
      res.redirect("/listings");
    });
  } catch (err) {
    if (err.name === "UserExistsError") {
      req.flash("error", "Email is already registered.");
    } else {
      req.flash("error", "An error occurred: " + err.message);
    }
    return res.redirect("/signup");
  }
};

exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

exports.login = (req, res, next) => {
  req.flash("success", "Welcome back to AirBnb");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are logged out now");
    res.redirect("/listings");
  });
};
