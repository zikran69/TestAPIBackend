const {
  checkUser,
  insertUser,
  insertCustomer,
} = require("./booking.repository");

const createUser = async (newData) => {
  const check = await checkUser(newData);
  if (check) {
    throw Error("User already exists");
  }
  const user = await insertUser(newData);

  const customer = await insertCustomer(newData);

  return user;
};

module.exports = {
  createUser,
};
