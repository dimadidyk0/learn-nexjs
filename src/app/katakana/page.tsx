import React from 'react';
import katakana from '@/constants/katakana.json';
import TestBanner from '@/components/TestBanner/TestBanner';
import s from './page.module.css';
import CharacterGrid from '@/components/domain/CharacterGrid/CharacterGrid';

export default function KatakanaPage() {
  return (
    <main className={s.root}>
      <h1 className={s.title}>Katakana chart</h1>
      <CharacterGrid characters={katakana} />
      <TestBanner
        title={"Let's check your Katakana knowledges!"}
        id={'katakana'}
      />
    </main>
  );
}
