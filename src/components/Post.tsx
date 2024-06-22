import React from 'react'
import s from './Post.module.css';

const names: string[] = ['Jack', 'Patrick'];

type Props = {
  author: string,
  content: string,
}

export default function Post({ author, content}: Props) {
  return (
    <div className={s.root}>
      <p className={s.title}>{author}</p>
      <p className={s.content}>{content}</p>
    </div>
  )
}
