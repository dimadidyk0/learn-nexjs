import React from 'react';
import hiragana from '@/constants/hiragana.json';
import { HiraganaType } from '@/types/hiragana';
import { CharacterToLearn } from '../../components/domain/CharacterToLearn/CharacterToLearn';
import s from './page.module.css';

export default function HiraganaPage() {
  return (
    <main>
      <h1 className={s.title}>Hiragana</h1>

      {hiragana.map((row: HiraganaType[], index: number) => (
        <div className={s.row} key={index}>
          {row.map((character: HiraganaType) => (
            <CharacterToLearn
              key={character.symbol}
              character={character.symbol}
            />
          ))}
        </div>
      ))}
    </main>
  )
}
