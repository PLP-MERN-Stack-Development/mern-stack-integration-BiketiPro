import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();
export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); // current logged-in user

  // fetch logged-in user from localStorage (JWT)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Fetch posts
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Create post
  const createPost = async (newPost) => {
    try {
      if (!user) return alert("You must be logged in to create a post.");

      const res = await axios.post(
        "http://localhost:5000/api/posts",
        { ...newPost, author: user.username }, // attach author
        { headers: { "Content-Type": "application/json" } }
      );
      setPosts((prev) => [...prev, res.data]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // Update post
  const updatePost = async (id, updatedPost) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/posts/${id}`,
        updatedPost,
        { headers: { "Content-Type": "application/json" } }
      );
      setPosts((prev) =>
        prev.map((post) => (post._id === id ? res.data : post))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // Delete post
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      setPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, createPost, updatePost, deletePost, user, setUser }}
    >
      {children}
    </PostContext.Provider>
  );
};
