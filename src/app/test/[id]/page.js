import Link from 'next/link'
import React from 'react';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import s from './page.module.css';

export default function ExamPage({ params }) {
  const exam = {
    tries: {
      total: 5,
      used: 1
    },
    questions: {
      total: 30,
      answered: 3,
      data: [
        {
          question: "か",
          options: [
            ['a', false],
            ['tsu', false],
            ['o', false],
            ['ka', true],
          ]
        }
      ]
    },
  }

  return (
    <main>
      <p>Exam <b>{params.id}</b></p>

      <div>
        <header className={s.header}>
          <div className={s.lives}>
            <span>{new Array(exam.tries.total - exam.tries.used).fill(<FullHeartIcon />)}</span>
            <span>{new Array(exam.tries.used).fill(<EmptyHeartIcon />)}</span>
          </div>

          <div className={s.answered}>Answered: {exam.questions.answered}/{exam.questions.total}</div>
          <Link href={"/hiragana"} className={s.close}>
            <CloseIcon />
          </Link>
        </header>

        <div className={s.question}>
          {exam.questions.data[0].question}
        </div>

        <div className={s.options}>
          {exam.questions.data[0].options.map(([option, isCorrect]) => (
            <div className={s.option} key={option}>{option}</div>
          ))}
        </div>
      </div>
    </main>
  )
}
