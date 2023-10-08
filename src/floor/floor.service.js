const prisma = require("../../backend-booking/src/db/index");
const { findAllUser } = require("./floor.repository");

const allUsers = async () => {
  const users = await findAllUser();
  return users;
};

module.exports = {
  allUsers,
};
