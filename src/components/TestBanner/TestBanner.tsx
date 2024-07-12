import React from 'react';
import s from './TestBanner.module.css';
import Link from 'next/link';

type Props = {
  title?: string;
  result?: string;
  id: string;
};

export default function TestBanner({ title, result, id }: Props) {
  return (
    <div className={s.banner}>
      <div className={s.left}>
        {title && <h3 className={s.title}>{title}</h3>}  
        <Link className={s.button} href={`/test/${id}`}>Start test</Link>
      </div>

      {result && (
        <div className={s.result}>
          Results: {result}
        </div>
      )}
    </div>
  )
}
