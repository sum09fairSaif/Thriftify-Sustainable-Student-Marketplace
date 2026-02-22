const mongoose = require("mongoose");

const RegisteredUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const RegisteredUserModel = mongoose.model(
  "Registered_User",
  RegisteredUserSchema,
);

module.exports = RegisteredUserModel;
