import React from 'react';
import logoImg from '@/assets/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} alt="A plate with a food on it" />
        Next Level food
      </Link>

      <nav>
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
