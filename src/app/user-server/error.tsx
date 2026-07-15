"use client";
import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return (
    <>
      <div>{`Error loading the users`}</div>
    </>
  );
}
