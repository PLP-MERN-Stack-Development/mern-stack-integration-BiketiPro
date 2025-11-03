import React, { useState } from "react";
import { usePosts } from "../context/PostContext";

const PostForm = ({ editPost = null, onClose }) => {
  const { createPost, updatePost } = usePosts();
  const [title, setTitle] = useState(editPost ? editPost.title : "");
  const [content, setContent] = useState(editPost ? editPost.content : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editPost) {
      updatePost(editPost._id, { title, content });
    } else {
      createPost({ title, content });
    }
    onClose();
  };

  return (
    <div className="p-5 bg-white rounded-2xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {editPost ? "Edit Post" : "Create New Post"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter title"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your content..."
          className="w-full border border-gray-300 p-3 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            {editPost ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
