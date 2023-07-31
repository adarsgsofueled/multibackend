const { Userfirebasesignin } = require("../models");

const signinresolvers = {
  users: async () => {
    return await Userfirebasesignin.findAll();
  },
  user: async ({ id }) => {
    return await Userfirebasesignin.findByPk(id);
  },
  createUser: async ({ password, email }) => {
    return await Userfirebasesignin.create({ password, email });
  },
};

module.exports = { signinresolvers };
