module.exports = (req, res, next) => {
  req.user = req.cookies.user
    ? JSON.parse(req.cookies.user)
    : { name: "Anonimo", color: "red" };
  next();
};
