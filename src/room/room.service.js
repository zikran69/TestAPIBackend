const express = require("express");
const prisma = require("../db/index");

const { findAllUser } = require("./room.repository");

const allUsers = async () => {
  const users = await findAllUser();
  return users;
};

module.exports = {
  allUsers,
};
