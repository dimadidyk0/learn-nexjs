import React from 'react';
import katakana from '@/constants/katakana.json';
import { CharacterType } from '@/types/character';
import { CharacterToLearn } from '../../components/domain/CharacterToLearn/CharacterToLearn';
import TestBanner from '@/components/TestBanner/TestBanner';
import s from './page.module.css';

export default function HiraganaPage() {
  return (
    <main className={s.root}>
      <h1 className={s.title}>Katakana chart</h1>

      <div className={s.grid}>
        {katakana.map((row: CharacterType[], index: number) => (
          <div className={s.column} key={index}>
            {row.map((character: CharacterType) => (
              <CharacterToLearn
                key={character.symbol}
                character={character.symbol}
                romaji={character.romaji}
              />
            ))}
          </div>
        ))}
      </div>

      <TestBanner
        title={"Let's check your Katakana knowledges!"}
        id={'katakana'}
      />
    </main>
  );
}
