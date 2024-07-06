import React from 'react';
import s from './CharacterToLearn.module.css';

type Props = {
  character: string;
};

export function CharacterToLearn({ character }: Props) {
  return (
    <span className={s.character}>{character}</span>
  )
};
