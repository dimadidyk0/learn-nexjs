import React from 'react';
import s from './CharacterGrid.module.css';
import { CharacterType } from '@/types/character';
import { Character } from '../Character/Character';

interface Props {
  characters: CharacterType[][];
}

export default function CharacterGrid({ characters }: Props) {
  return (
    <div className={s.grid}>
      {characters.map((row: CharacterType[], index: number) => (
        <div className={s.column} key={index}>
          {row.map((character: CharacterType) => (
            <Character
              key={character.symbol}
              character={character.symbol}
              romaji={character.romaji}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
