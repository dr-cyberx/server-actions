import { NextPage } from "next";
import React, { Suspense } from "react";
import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

const UserPage: NextPage<Params> = async ({ params: { userId } }) => {
  const userData: Promise<any> = getUser(userId);
  const userPostData: Promise<any> = getUserPost(userId);

  //   const [user, userPosts] = await Promise.all([userData, userPostData]);
  const user = await userData;

  return (
    <>
      <h1 className="font-medium text-2xl	">{user.name}</h1>
      <br />
      <Suspense fallback={<>Loading...</>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
};

export default UserPage;
