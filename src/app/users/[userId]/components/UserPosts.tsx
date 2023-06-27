import React from "react";

const UserPosts = async ({ promise }: { promise: any }) => {
  const posts = await promise;

  const content = posts.map((post: any) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  });

  return content;
};

export default UserPosts;
