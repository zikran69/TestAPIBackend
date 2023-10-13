const {
  findAllUser,
  findUser,
  checkUser,
  deleteUser,
  updateUser,
  insertUser,
} = require("./admin.repository");

const allUsers = async () => {
  const users = await findAllUser();
  return users;
};

const userById = async (id) => {
  const users = await findUser(id);
  if (!users) {
    throw Error("User not found");
  }
  return users;
};

const createUser = async (newData) => {
  const check = await checkUser(newData);
  if (check) {
    throw Error("User already exists");
  }
  const user = await insertUser(newData);

  return user;
};

const deleteUserById = async (id) => {
  await userById(id);

  await deleteUser(id);
};

const editUserById = async (id, newData) => {
  await userById(id);

  const user = await updateUser(id, newData);

  return user;
};

module.exports = {
  allUsers,
  userById,
  deleteUserById,
  createUser,
  editUserById,
};
