import React, { useEffect, useState } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      setPosts(data);
      console.log(posts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-[90%] flex flex-col bg-white p-4 space-y-3"
        >
          <div className="flex justify-between">
            <span>{post.user}</span>
            <span>{post.createdAt.slice(0, 10)}</span>
          </div>
          <p className="bg-neutral-200 p-4">{post.content}</p>
          <div className="self-end flex space-x-2">
            <button className="bg-neutral-200 py-1 px-3">수정</button>
            <button className="bg-neutral-200 py-1 px-3">삭제</button>
          </div>
        </div>
      ))}
    </>
  );
}
