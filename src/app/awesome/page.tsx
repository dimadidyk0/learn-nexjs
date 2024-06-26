
import PostsList from "@components/PostsList/PostsList";
import Link from "next/link";
import React from "react";

export default function AwesomePage() {
  return (
    <main>
      <Link href={"/awesome/test-1"}>Test 1</Link>
      <PostsList />
    </main>
  )
}