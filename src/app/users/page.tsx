import React from "react";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

const Users = async () => {
  const usersData: Promise<any> = getAllUsers();

  const users = await usersData;

  console.log('Hello from Server Component >>>> ')

  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((user: any) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
};

export default Users;
