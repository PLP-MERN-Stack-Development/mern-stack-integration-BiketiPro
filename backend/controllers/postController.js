import Post from "../models/Post.js";
import Category from "../models/Category.js"; // ✅ Import Category model

// @desc    Get all posts
// @route   GET /api/posts
export const getPosts = async (req, res) => {
  try {
    // ✅ Populate category for all posts
    const posts = await Post.find().populate("category", "name description");
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get single post
// @route   GET /api/posts/:id
export const getPostById = async (req, res) => {
  try {
    // ✅ Populate category details
    const post = await Post.findById(req.params.id).populate("category", "name description");
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new post
// @route   POST /api/posts
export const createPost = async (req, res) => {
  const { title, content, image, category } = req.body;

  try {
    // ✅ Validate required fields
    if (!title || !content || !category) {
      return res.status(400).json({ message: "Title, content, and category are required." });
    }

    // ✅ Ensure the category exists
    const existingCategory = await Category.findById(category);
    if (!existingCategory) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    // ✅ Create and save post
    const newPost = new Post({ title, content, image, category });
    const savedPost = await newPost.save();

    // ✅ Populate category for response
    const populatedPost = await savedPost.populate("category", "name description");

    res.status(201).json(populatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update post
// @route   PUT /api/posts/:id
export const updatePost = async (req, res) => {
  try {
    // ✅ If category is being updated, validate it
    if (req.body.category) {
      const categoryExists = await Category.findById(req.body.category);
      if (!categoryExists) {
        return res.status(400).json({ message: "Invalid category ID." });
      }
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate("category", "name description");

    if (!updatedPost) return res.status(404).json({ message: "Post not found" });

    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete post
// @route   DELETE /api/posts/:id
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
