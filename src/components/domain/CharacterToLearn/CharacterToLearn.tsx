"use client";

import React from 'react';
import s from './CharacterToLearn.module.css';
import { readme } from '@/services/readme';

type Props = {
  character: string;
};

export function CharacterToLearn({ character }: Props) {

  return (
    <span onClick={() => readme(character)} className={s.character}>{character}</span>
  )
};
