import React from "react";

const getUser: (userId: string) => Promise<any> = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) throw new Error("Failed to fetch Users!");

  return res.json();
};

export default getUser;
