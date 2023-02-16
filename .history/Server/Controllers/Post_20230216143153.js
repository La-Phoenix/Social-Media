import { User } from "../Schemas/User.js";
import Post from "../Schemas/Post.js";

export const createPosts = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
      const user = await User.findById(userId);
      
      const newPost = new Post({
          userId,
          firstName: user.firstName,
          lastName: user.lastName,
          location: user.location, \
          description, 
          userPicturePath: user.picturePath,
          picturePath,
          likes: {},
          comments: []
      })
      await newPost.save();

      const post = await Post.find()
      
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
