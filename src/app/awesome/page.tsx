
import Post from "@components/Post";
import React from "react";

export default function AwesomePage() {
  return (
    <main>
      <h1>NextJS is awesome</h1>
      <Post author="Mark" content="Content about Mark" />
      <Post author="Cliff" content="Content about CLiff" />
    </main>
  )
}