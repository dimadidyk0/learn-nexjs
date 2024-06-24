import React from 'react'
import s from './Post.module.css';

type Props = {
  author: string,
  content: string,
}

export default function Post({ author, content}: Props) {
  return (
    <li className={s.root}>
      <p className={s.title}>{author}</p>
      <p className={s.content}>{content}</p>
    </li>
  )
}
