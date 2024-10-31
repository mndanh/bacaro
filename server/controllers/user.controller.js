const { User } = require('../models');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

const Model = User; 

async function verifyUser(req) {
  //console.log(req.cookies);

  let cookie;
  try {
    cookie = await req.cookies["auth-cookie"];
  } catch (err) {
    console.log(err);
  }

  console.log("cookie", cookie);
  if (!cookie) return false;

  try {
    const isVerified = jwt.verify(cookie, process.env.JWT_SECRET);

    if (!isVerified) return false;

    const user = await Model.findOne({ _id: isVerified.id });
    return user || false;
  } catch (err) {
    console.error("Error verifying user:", err);
    return false;
  }
}

async function authenticate(data) {
  try {
    const user = await Model.findOne({ email: data.email });
    if (!user) throw new Error("No user found");

    const userIsOk = await bcrypt.compare(data.password, user.password);
    if (!userIsOk) throw new Error("Could not login");

    return user;
  } catch (err) {
    console.error("Error authenticating user:", err);
    throw new Error(err.message);
  }
}


async function getAllItems() {
  try {
    return await Model.find();
  } catch (err) {
    throw new Error(err)
  }
}

async function getItemById(id) {
  try {
    return await Model.findById(id);
  } catch (err) {
    throw new Error(err)
  }
}

// use this as our signup handler
async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    throw new Error(err)
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );
  } catch (err) {
    throw new Error(err)
  }
}

async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllUsers: getAllItems,
  getUserById: getItemById,
  createUser: createItem,
  updateUserById: updateItemById,
  deleteUserById: deleteItemById,
  authenticate,
  verifyUser
}
