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
  const restart = () => {
    setAnswers({
      correct: 0,
      total: 0,
    });
    setAvailableTries(exam.tries);
    setCurrentQuestionIndex(0);
  };
  const handleSelectOption = (index, option, isCorrect) => {
    if (answers[index]) {
      return;
    }

    if (!isCorrect) {
      setAvailableTries(availableTries - 1);
    }

    setAnswers({
      ...answers,
      correct: answers.correct + Number(isCorrect),
      total: answers.total + 1,
      [index]: {
        option,
        isCorrect,
      },
    });
    setTimeout(() => setCurrentQuestionIndex(currentQuestionIndex + 1), 500);
  }
  console.log(answers);

  const currentQuestion = exam.questions[currentQuestionIndex];

  if (availableTries <= 0) {
    return (
      <div>
        You lose
        <button onClick={restart}>Start again</button>
      </div>
    )
  }

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

        {currentQuestionIndex < exam.questions.length ? (
          <>
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
          </>
        ) : <div>test is done</div>} 
      </div>
    </main>
  )
}
