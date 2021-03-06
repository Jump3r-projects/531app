const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//User model
const User = require("../../models/user");

//@route POST api/auth
// @desc Authenticate user
// @access public
router.post("/", (req, res) => {
  const { email, password } = req.body;
  //validate if password and email was sent
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Find if existing user
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      //validate password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch)
          return res.status(400).json({ msg: "Invalid email/password" });

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
    })
    .catch(err => console.log(err));
});

// @route GET api/auth/user
// @desc Get User data from token
// @access private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    //Unselect password
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
