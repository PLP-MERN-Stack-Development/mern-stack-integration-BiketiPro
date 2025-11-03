// src/pages/Home.jsx
import React, { useState } from "react";
import { Plus } from "lucide-react";
import PostForm from "../components/PostForm";
import { usePosts } from "../context/PostContext";
import PostCard from "../components/PostCard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { posts } = usePosts();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  if (!user) {
    navigate("/login"); // just in case
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div className="text-center flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Welcome, {user.username} ✨
          </h1>
          <p className="text-gray-600">
            Share your thoughts, connect with others, and explore new ideas.
          </p>
        </div>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Posts */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet — create one!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}

      {/* Post Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <PostForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Floating Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-8 right-8 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
      >
        <Plus size={28} />
      </button>
    </div>
  );
};

export default Home;
