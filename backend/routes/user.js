const express = require("express");
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

const router = express.Router();
//create zod schema for in comming body 
const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  password: zod.string(),
});

//first makeshure that the body is valid  check any user exist if yes the stop else create new user
router.post("/signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req, body);
  if (!success) {
    return res.json({
      message: "Email already exists / Incorrect inputs",
    });
  }
  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "Email already taken",
    });
  }

  const dbUser = await user.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token: token,
  });
});
module.exports = router;
