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
  const [answers, setAnswers] = useState({
    correct: 0,
    total: 0,
  });
  const handleSelectOption = (index, option, isCorrect) => {
    if (answers[index]) {
      return;
    }

    setAnswers({
      ...answers,
      correct: answers.correct + Number(isCorrect),
      total: answers.correct + 1,
      [index]: {
        option,
        isCorrect,
      },
    });
    if (exam.questions.length - 1 > currentQuestionIndex) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 750);
    } else {
      alert('THE END');
    }
  }
  console.log(answers);

  const currentQuestion = exam.questions[currentQuestionIndex];

  return (
    <main>
      <p>Exam <b>{params.id}</b></p>

      <div>
        <header className={s.header}>
          <div className={s.lives}>
            <span>
              {new Array(availableTries).fill(true).map((_, i) => <FullHeartIcon key={i} />)}
            </span>
            <span>
              {new Array(exam.tries - availableTries).fill(true).map((_, i) => <EmptyHeartIcon key={i} />)}
            </span>
          </div>

          <div className={s.answered}>
            Answered: {answers.total}/{exam.questions.length}
          </div>

          <Link href={"/hiragana"} className={s.close}>
            <CloseIcon />
          </Link>
        </header>

        <div className={s.question}>
          {currentQuestion.title}
        </div>

        <div className={s.options}>
          {currentQuestion.options.map((option, index) => (
            <div
              key={option}
              className={cx(s.option, {
                [s.correct]: answers?.[currentQuestionIndex]?.option === option && answers[currentQuestionIndex].isCorrect,
                [s.incorrect]: answers?.[currentQuestionIndex]?.option === option && !answers[currentQuestionIndex].isCorrect,
              })}
              onClick={() => handleSelectOption(currentQuestionIndex, option, index === currentQuestion.correctIndex)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
