const express = require("express");
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const {
  checkUser,
  insertUser,
  insertCustomer,
} = require("./booking.repository");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.email",
  secure: false,
  service: "gmail",
  auth: {
    user: "trianahilmi7@gmail.com",
    pass: "ohlnrcjzmtcwcdme",
  },
});

const createUser = async (newData) => {
  const check = await checkUser(newData);
  if (check) {
    var cust = check.idCustomer;
  } else {
    const custInsert = await insertCustomer(newData);
    var cust = custInsert.idCustomer;
  }
  const user = await insertUser(newData, cust);
  const source = fs.readFileSync("email_template.html", "utf-8").toString();
  const template = handlebars.compile(source);
  const replacements = {
    username: "zikran",
  };
  const htmlToSend = template(replacements);

  const mailOpstions = {
    // email admin operational
    from: "trianahilmi7@gmail.com",
    // email customer
    to: "trianahilmi5@gmail.com",

    //body email :
    subject: "your hotel booking successfuly verifited ",
    html: htmlToSend,
  };

  transporter.sendMail(mailOpstions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
  return user;
};

module.exports = {
  createUser,
};
