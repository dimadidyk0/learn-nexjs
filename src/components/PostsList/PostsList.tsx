import React from 'react'
import Post from '@components/Post/Post';
import s from './PostsList.module.css';

export default function PostsList() {
  return (
    <ul className={s.root}>
      <Post author="Mark" content="Content about Mark" />
      <Post author="Cliff" content="Content about CLiff" />
      <Post author="Mark" content="Content about Mark" />
      <Post author="Cliff" content="Content about CLiff" />
      <Post author="Mark" content="Content about Mark" />
      <Post author="Cliff" content="Content about CLiff" />
    </ul>
  )
}
