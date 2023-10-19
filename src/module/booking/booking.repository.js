const prisma = require("../../db/index");

const checkUser = async (newData) => {
  const users = await prisma.customer.findFirst({
    where: {
      emailCustomer: newData.emailCustomer,
    },
  });
  return users;
};

const insertUser = async (newData, cust) => {
  const user = await prisma.transaction.create({
    data: {
      customerId: cust,
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
      nameCustomer: newData.nameCustomer,
      nikCustomer: newData.nikCustomer,
      emailCustomer: newData.emailCustomer,
      tlpnCustomer: newData.tlpnCustomer,
      addressCustomer: newData.addressCustomer,
      fotoCustomer: newData.fotoCustomer,
      paswordCustomer: newData.emailCustomer,
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
