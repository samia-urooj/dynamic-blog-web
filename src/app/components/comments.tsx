"use client";

import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="border-b py-2">{comment}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleAddComment}
          className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-600"
        >
          Comment
        </button>
      </div>
    </div>
  );
}