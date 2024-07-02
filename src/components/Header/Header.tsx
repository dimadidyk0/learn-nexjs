"use client";
import React from 'react';
import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';
//
import s from './Header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  return (
    <header className={s.header}>
      <Link className={s.logo} href="/">
        <Image src={logoImg} alt="A plate with a food on it" priority />
        Next Level food
      </Link>

      <nav className={s.nav}> 
        <ul>
          <li>
            <Link href={"/meals"} className={path.startsWith("/meals") ? s.active : ''}>Browse Meals</Link>
          </li>
          <li>
            <Link href={"/community"}  className={path.startsWith("/community") ? s.active : ''}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
