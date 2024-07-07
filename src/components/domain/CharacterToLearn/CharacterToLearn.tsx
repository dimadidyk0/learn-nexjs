"use client";

import React from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { readme } from '@/services/readme';
import s from './CharacterToLearn.module.css';

type Props = {
  character: string;
};

export function CharacterToLearn({ character }: Props) {
  return (
    <span className={s.character}>
      {character}
      <VolumeUpIcon onClick={() => readme(character)} className={s.soundIcon} />
    </span>
  )
};
