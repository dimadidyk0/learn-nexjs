import React from 'react';
import hiragana from '@/constants/hiragana.json';
import { HiraganaType } from '@/types/hiragana';
import { CharacterToLearn } from '../../components/domain/CharacterToLearn/CharacterToLearn';
import s from './page.module.css';

export default function HiraganaPage() {
  return (
    <main className={s.root}>
      <h1 className={s.title}>Hiragana chart</h1>

      <div className={s.grid}>
        {hiragana.map((row: HiraganaType[], index: number) => (
          <div className={s.column} key={index}>
            {row.map((character: HiraganaType) => (
              <CharacterToLearn
                key={character.symbol}
                character={character.symbol}
                romaji={character.romaji}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
