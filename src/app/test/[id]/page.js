"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import s from './page.module.css';

export default function ExamPage({ params }) {
  const [answers, setAnswers] = useState({});
  const handleSelectOption = (question, option) => {
    setAnswers({
      ...answers,
      [question]: option,
    })
  }
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

  console.log(answers);

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
            <div
              key={option}
              className={s.option}
              onClick={() => handleSelectOption(exam.questions.data[0].question, option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
