const prisma = require("../../db/index");

const checkUser = async (newData) => {
  const users = await prisma.transaction.findFirst({
    where: {
      customerId: newData.customerId,
      statusTransaction: newData.statusTransaction,
    },
  });
  return users;
};

const insertUser = async (newData) => {
  const user = await prisma.transaction.create({
    data: {
      customerId: newData.customerId,
      roomId: newData.roomId,
      statusTransaction: newData.statusTransaction,
      checkIn: newData.checkIn,
      checkOut: newData.checkOut,
      day: newData.day,
      people: newData.people,
      booking: newData.booking,
      statusPayment: newData.statusPayment,
      totalPayment: newData.totalPayment,
    },
  });
  return user;
};
const insertCustomer = async (newData) => {
  const user = await prisma.customer.create({
    data: {
      idCustomer: newData.idCustomer,
      nameCustomer: newData.nameCustomer,
      nikCustomer: newData.nikCustomer,
      emailCustomer: newData.emailCustomer,
      tlpCustomer: newData.tlpCustomer,
      addressCustomer: newData.addressCustomer,
      fotoCustomer: newData.fotoCustomer,
      passwordCustomer: newData.passwordCustomer,
      statusCustomer: newData.statusCustomer,
    },
  });
  return user;
};

module.exports = {
  checkUser,
  insertUser,
  insertCustomer,
};
