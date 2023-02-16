import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../Schemas/User.js"

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const newPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: newPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 1000),
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const logIn = async (req, res) => {};
try {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) { 
    return res.status(404).json({
  }
} catch (error) {}
