"use client";
import React, { useState } from 'react'
import Post from '@components/Post/Post';
import AddPost from "@components/AddPost/AddPost";
import PostInterface from "@/types/PostInterface";
import s from './PostsList.module.css';


export default function PostsList() {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const handleSubmit = (newPost: PostInterface) => {
    setPosts([...posts, newPost])
  }

  return (
    <>
      <AddPost onSubmit={handleSubmit} />

      <ul className={s.root}>
        {posts.map(post => (
          <Post key={post.content} author={post.author} content={post.content} />
        ))}
      </ul>
    </>
  )
}
