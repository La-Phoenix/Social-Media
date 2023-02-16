import { User } from "../Schemas/User.js";
import { Post } from "../Schemas/Post.js";

export const createPosts = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const posts = await Post.find();
    if (posts.length < 1)
      return res.status(404).json({ error: "No posts found" });
    res.status(201).json({
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length < 1)
      return res.status(404).json({ error: "No posts found" });
    res.status(200).json({
      message: posts,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message || err,
    });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await Post.findById(userId);
    if (posts.length < 1)
      return res.status(404).json({ error: "No posts found" });
    res.status(200).json({
      message: posts,
    });
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
