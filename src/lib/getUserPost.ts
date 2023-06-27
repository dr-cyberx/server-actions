import React from "react";

const getUserPost: (userId: string) => Promise<any> = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!res.ok) throw new Error("Failed to fetch posts!");

  return res.json();
};

export default getUserPost;
