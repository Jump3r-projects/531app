const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User model
const User = require("../../models/user");

// @route post api/users
// @desc register new user
// @access public
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //check if fields entered
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check if existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    let newUser = new User({
      name,
      email,
      password
    });

    //hash and salt password
    bcrypt.genSalt(16, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        //set newUser password as the hash
        newUser.password = hash;
        //Then save to Mongo
        newUser.save().then(user => {
          jwt.sign(
            { id: user.id },
            process.env.SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  name: user.name,
                  id: user.id,
                  email: user.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
