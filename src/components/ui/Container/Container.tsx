import React from 'react';
import s from './Container.module.css';

type Props = {
  children: React.ReactNode,
}

export default function Container({ children }: Props) {
  return (
    <div className={s.container}>{children}</div>
  )
};
