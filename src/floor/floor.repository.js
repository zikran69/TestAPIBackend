const prisma = require("../../backend-booking/src/db/index");

const findAllUser = async () => {
  const users = await prisma.room.findMany();
  return users;
};

module.exports = {
  findAllUser,
};
