import React from 'react';
import hiragana from '@/constants/hiragana.json';
import s from './page.module.css';
import TestBanner from '@/components/TestBanner/TestBanner';
import CharacterGrid from '@/components/domain/CharacterGrid/CharacterGrid';

export default function HiraganaPage() {
  return (
    <main className={s.root}>
      <h1 className={s.title}>Hiragana chart</h1>
      <CharacterGrid characters={hiragana} />
      <TestBanner
        title={"Let's check your Hiragana knowledges!"}
        id={'hiragana'}
      />
    </main>
  );
}
