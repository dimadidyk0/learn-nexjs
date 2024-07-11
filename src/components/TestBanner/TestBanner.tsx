import React from 'react';
import s from './TestBanner.module.css';

type Props = {
  title?: string;
  result?: string;
};

export default function TestBanner({ title, result }: Props) {
  return (
    <div className={s.banner}>
      <div className={s.left}>
        {title && <h3 className={s.title}>{title}</h3>}
        <button className={s.button}>Start test</button>
      </div>

      {result && (
        <div className={s.result}>
          Results: {result}
        </div>
      )}
    </div>
  )
}
