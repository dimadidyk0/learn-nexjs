"use client";
import React, { FormEvent, useState } from 'react';
import PostInterface from "@/types/PostInterface";
import s from './AddPost.module.css';

type Props = {
  onSubmit: (post: PostInterface) => void,
};

export default function AddPost({ onSubmit }: Props) {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ author, content });
    setAuthor('');
    setContent('');
  };

  return (
    <div className={s.root}>
      <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label} htmlFor='content'>Text</label>
          <textarea
            className={s.textarea}
            id="content"
            value={content}
            required
            onChange={e => setContent(e.target.value)}
          />

          <label  className={s.label} htmlFor='author'>Name</label>
          <input
            className={s.input}
            id="author" required
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />

          <button className={s.button}>submit</button>
      </form>
    </div>
  )
}
