module.exports = (req, res, next) => {
  console.log(req.user);
  if (req.user.admin == 1) {
    next();
  } else {
    res.redirect("/");
  }
};
