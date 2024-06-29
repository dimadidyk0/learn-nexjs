import React from 'react';
import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        <img src={logoImg.src} alt="A plate with a food on it" />
        Next Level food
      </Link>

      <nav className={s.nav}> 
        <ul>
          <li>
            <Link href={"/meals"}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
