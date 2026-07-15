import { Suspense } from "react";
import Author from "./author";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlogPage",
  description: "BlockPage with Author",
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function BlogPage() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await response.json();

  const list = posts?.filter((p) => p.id % 10 === 1);
  return (
    <div style={{ padding: "20px" }}>
      <p>Blog page</p>
      {list?.map((post: Post) => {
        return (
          <div style={{ marginBottom: "24px" }} key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <Suspense fallback={<div>{`Loading Author...`}</div>}>
              <Author userId={post.userId} />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}
