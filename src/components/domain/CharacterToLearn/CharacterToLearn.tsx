'use client';

import React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { readme } from '@/services/readme';
import s from './CharacterToLearn.module.css';

type Props = {
  character: string;
  romaji: string;
};

export function CharacterToLearn({ character, romaji }: Props) {
  return (
    <span className={s.character}>
      <VolumeUpIcon onClick={() => readme(character)} className={s.soundIcon} />
      {character}
      <span className={s.romaji}>{romaji}</span>
    </span>
  );
}
