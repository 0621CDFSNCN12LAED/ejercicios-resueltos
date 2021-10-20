const authService = require("../services/auth-service");

module.exports = async (req, res, next) => {
  const id = req.session.loggedUserId;
  if (id) {
    const user = await authService.getById(id);
    if (user) {
      req.user = user;
      res.locals.user = user;
    } else {
      req.session.loggedUserId = null;
    }
  }
  next();
};
