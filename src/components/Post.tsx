import React from 'react'

const names: string[] = ['Jack', 'Patrick'];

type Props = {
  author: string,
  content: string,
}

export default function Post({ author, content}: Props) {
  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  )
}
