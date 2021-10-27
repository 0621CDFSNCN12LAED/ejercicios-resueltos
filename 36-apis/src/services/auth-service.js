const bcrypt = require("bcryptjs");

const { User } = require("../database/models");

module.exports = {
  getById: async (id) => {
    return await User.findByPk(id);
  },
  getByEmail: async (email) => {
    return await User.findOne({ where: { email: email } });
  },
  createUser: async (requestBody) => {
    await User.create({
      ...requestBody,
      password: bcrypt.hashSync(requestBody.password, 12),
    });
  },
};
