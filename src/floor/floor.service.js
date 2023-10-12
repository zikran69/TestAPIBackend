const prisma = require("../db/index");
const { findAllUser } = require("./floor.repository");

const allUsers = async () => {
  const users = await findAllUser();
  return users;
};

module.exports = {
  allUsers,
};
