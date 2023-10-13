const express = require("express");

const { findAllUser } = require("./room.repository");

const allUsers = async () => {
  const users = await findAllUser();
  return users;
};

module.exports = {
  allUsers,
};
