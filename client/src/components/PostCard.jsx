// src/components/PostCard.jsx
import React, { useState } from "react";
import { Trash2, Edit2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostContext";
import PostForm from "./PostForm";
import { useAuth } from "../context/AuthContext";

const PostCard = ({ post }) => {
  const { deletePost } = usePosts();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const canEditOrDelete = user?.username === post.author;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between">
      {isEditing ? (
        <PostForm editPost={post} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2">by {post.author}</p>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.content}</p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate(`/post/${post._id}`)}
              className="p-2 rounded-full hover:bg-blue-50 text-blue-600 transition"
            >
              <Eye size={18} />
            </button>

            {canEditOrDelete && (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 rounded-full hover:bg-yellow-50 text-yellow-600 transition"
                >
                  <Edit2 size={18} />
                </button>

                <button
                  onClick={() => deletePost(post._id)}
                  className="p-2 rounded-full hover:bg-red-50 text-red-600 transition"
                >
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PostCard;
