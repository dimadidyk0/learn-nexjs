import React from 'react';
import hiragana from '@/constants/hiragana.json';
import { HiraganaType } from '@/types/hiragana';

export default function HiraganaPage() {
  return (
    <main>
      <h1>Hiragana</h1>
      {hiragana.map((row: HiraganaType[], index: number) => (
        <div key={index}>
          {row.map((character: HiraganaType) => (
            <span key={character.symbol}>{character.symbol}</span>
          ))}
        </div>
      ))}
    </main>
  )
}
