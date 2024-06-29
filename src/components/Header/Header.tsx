import React from 'react';
import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
//
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        <Image src={logoImg} alt="A plate with a food on it" priority />
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
