const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisteredUserModel = require("./models/Registered_User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Registered_User");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  RegisteredUserModel.findOne({ email: email })
    .then((registeredUser) => {
      if (registeredUser) {
        if (password === registeredUser.password) {
          res.json({ message: "Login successful" });
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.json({ message: "Error occurred while logging in" });
    });
});

app.post("/register", (req, res) => {
  RegisteredUserModel.create(req.body)
    .then((registeredUser) => res.json(registeredUser))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
