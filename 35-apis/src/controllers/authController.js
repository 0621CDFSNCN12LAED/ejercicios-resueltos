const authService = require("../services/auth-service");
const bcrypt = require("bcryptjs");

module.exports = {
  showLogin: (req, res) => {
    res.render("login");
  },
  login: async (req, res) => {
    const user = await authService.getByEmail(req.body.email);
    if (!user) {
      //TODO Mandar datos de error
      res.redirect("back");
      return;
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      //TODO Mandar datos de error
      res.redirect("back");
      return;
    }

    req.session.loggedUserId = user.id;

    res.redirect("/movies");
  },
  showRegister: (req, res) => {
    res.render("register");
  },
  register: async (req, res) => {
    await authService.createUser(req.body);
    res.redirect("/login");
  },
};
