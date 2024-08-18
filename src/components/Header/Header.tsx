'use client';
import React from 'react';
import Link from 'next/link';
import s from './Header.module.css';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container/Container';

export default function Header() {
  const path = usePathname();

  return (
    <Container>
      <header className={s.header}>
        <Link className={s.logo} href="/">
          Learn-Pet
        </Link>

        <nav className={s.nav}>
          <ul>
            <li>
              <Link
                href={'/hiragana'}
                className={path.startsWith('/hiragana') ? s.active : ''}
              >
                Hiragama
              </Link>
            </li>
            <li>
              <Link
                href={'/katakana'}
                className={path.startsWith('/katakana') ? s.active : ''}
              >
                Katakana
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
}
