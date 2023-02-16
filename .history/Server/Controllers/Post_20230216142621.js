import { User } from "../Schemas/User.js";

export const createPosts = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.;
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};
export const getFeedPosts = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};
export const getUserPosts = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};
export const likePosts = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};
