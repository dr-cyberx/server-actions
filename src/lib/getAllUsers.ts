import React from "react";

const getAllUsers: () => Promise<any> = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("Failed to fetch Users!");

  return res.json();

};

export default getAllUsers;
