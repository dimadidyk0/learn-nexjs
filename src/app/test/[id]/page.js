"use client";
import Link from 'next/link'
import cx from 'classnames';
import React, { useState } from 'react';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { exam } from './exam';
import s from './page.module.css';

export default function ExamPage({ params }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [availableTries, setAvailableTries] = useState(exam.tries);
  const [answers, setAnswers] = useState({});
  // const handleSelectOption = (question, option, isCorrect) => {
  //   setAnswers({
  //     ...answers,
  //     [question]: {
  //       option,
  //       isCorrect,
  //     },
  //   })
  // }
  // console.log(answers);

  return (
    <main>
      <p>Exam <b>{params.id}</b></p>

      <div>
        <header className={s.header}>
          <div className={s.lives}>
            <span>
              {new Array(availableTries).fill(<FullHeartIcon />)}
            </span>
            <span>
              {new Array(exam.tries - availableTries).fill(<EmptyHeartIcon />)}
            </span>
          </div>

          <div className={s.answered}>Answered: {exam.questions.answered}/{exam.questions.total}</div>
          <Link href={"/hiragana"} className={s.close}>
            <CloseIcon />
          </Link>
        </header>

        {/* <div className={s.question}>
          {exam.questions.data[0].question}
        </div> */}

        {/* <div className={s.options}>
          {exam.questions.data[0].options.map(([option, isCorrect]) => (
            <div
              key={option}
              className={cx(s.option, {
                [s.correct]: answers[exam.questions.data[0].question].option === option && answers[exam.questions.data[0].question].isCorrect,
                [s.incorrect]: answers[exam.questions.data[0].question].option === option && !answers[exam.questions.data[0].question].isCorrect,
              })}
              onClick={() => handleSelectOption(exam.questions.data[0].question, option, isCorrect)}
            >
              {option}
            </div>
          ))}
        </div> */}
      </div>
    </main>
  )
}
