import React from 'react';
import s from './AddPost.module.css';

export default function AddPost() {
  return (
    <div className={s.root}>
      <form className={s.form}>
          <label className={s.label} htmlFor='content'>Text</label>
          <textarea className={s.textarea} id="content" required />
          <label  className={s.label}htmlFor='name'>Name</label>
          <input className={s.input} id="name" required />

          <button className={s.button}>submit</button>
      </form>
    </div>
  )
}
