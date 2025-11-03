import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import PostForm from "../components/PostForm";

const ViewPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost, deletePost } = usePosts();
  const post = posts.find((p) => p._id === id);

  const [isEditing, setIsEditing] = useState(false);

  if (!post)
    return (
      <p className="text-center mt-10 text-gray-500">
        Post not found.
      </p>
    );

  const handleDelete = () => {
    deletePost(post._id);
    navigate("/"); // go back home after delete
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      {isEditing ? (
        <PostForm
          editPost={post}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-8">{post.content}</p>

          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Edit
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-gray-100 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewPost;
