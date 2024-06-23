"use client";
import React, { useState } from 'react';
import s from './AddPost.module.css';

export default function AddPost() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className={s.root}>
      <form className={s.form}>
          <label className={s.label} htmlFor='content'>Text</label>
          <textarea
            className={s.textarea}
            id="content"
            value={content}
            required
            onChange={e => setContent(e.target.value)}
          />

          <label  className={s.label}htmlFor='name'>Name</label>
          <input
            className={s.input}
            id="name" required
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <button className={s.button}>submit</button>
      </form>
    </div>
  )
}
