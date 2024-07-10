import React from 'react';
import s from './TestBanner.module.css';

export default function TestBanner() {
  return (
    <div className={s.banner}>
      <div className={s.left}>
        <h3 className={s.title}>Let&apos;s check your Hiragana knowledges!</h3>
        <button className={s.button}>Start test</button>
      </div>

      <div>
        Results: 90/100
      </div>
    </div>
  )
}
