const prisma = require("../../backend-booking/src/db/index");

const findAllUser = async () => {
  const users = await prisma.room.findMany({
    select: {
      idRoom: true,
      categoryId: true,
      floorId: true,
      nameRoom: true,
      statusId: true,
      descRoom: true,
    },
  });
  return users;
};

module.exports = {
  findAllUser,
};
