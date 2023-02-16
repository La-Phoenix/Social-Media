import { User } from "../Schemas/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: "User does not exist!" });
    delete user.password;
    res.status(200).json({
      message: user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
};
export const getUserFriends = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
};
export const addRemoveFriend = async (req, res) => {
  try {
  } catch (error) {}
};
