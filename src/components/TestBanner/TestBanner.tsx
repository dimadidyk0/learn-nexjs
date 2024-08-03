import React from 'react';
import s from './TestBanner.module.css';
import Link from 'next/link';

type Props = {
  title?: string;
  id: string;
};

export default function TestBanner({ title, id }: Props) {
  return (
    <div className={s.banner}>
      {title && <h3 className={s.title}>{title}</h3>}  
      <Link className={s.button} href={`/test/${id}`}>Start test</Link>
    </div>
  )
}
