import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../Schemas/User.js";

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

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ error: "User does not exist" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid Credentials!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
};
