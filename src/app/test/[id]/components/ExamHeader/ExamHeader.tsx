import React from 'react';
import Link from 'next/link';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import s from './ExamHeader.module.css';
import { buildEmptyArray } from '../../../../../utils';

interface Props {
  availableTries: number;
  totalTries: number;
  answeredAmount: number;
  totalAmount: number;
}

export default function ExamHeader({
  availableTries,
  totalTries,
  answeredAmount,
  totalAmount,
}: Props) {
  return (
    <header className={s.header}>
      <div className={s.lives}>
        {buildEmptyArray(availableTries).map((_, i) => (
          <FullHeartIcon key={i} />
        ))}
        {buildEmptyArray(totalTries - availableTries).map((_, i) => (
          <EmptyHeartIcon key={i} />
        ))}
      </div>

      <div className={s.answered}>
        Answered: {answeredAmount}/{totalAmount}
      </div>

      <Link href={'/hiragana'} className={s.close}>
        <CloseIcon />
      </Link>
    </header>
  );
}
