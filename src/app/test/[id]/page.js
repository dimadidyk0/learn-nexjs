"use client";
import Link from 'next/link'
import cx from 'classnames';
import React, { useState } from 'react';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { exam } from './exam';
import s from './page.module.css';
import { Box, Modal, Typography } from '@mui/material';
import TestQuestion from '@/components/domain/TestQuestion/TestQuestion';
import ResultModal from './components/ResulModal/ResultModal';

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
  const handleSelectOption = (option, isCorrect) => {
    if (answers[currentQuestionIndex]) {
      return;
    }

    if (!isCorrect) {
      setAvailableTries(availableTries - 1);
    }

    setAnswers({
      ...answers,
      correct: answers.correct + Number(isCorrect),
      total: answers.total + 1,
      [currentQuestionIndex]: {
        option,
        isCorrect,
      },
    });
    setTimeout(
      () => setCurrentQuestionIndex(Math.min(currentQuestionIndex + 1, exam.questions.length - 1)),
      500
    );
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

        <TestQuestion
          title={currentQuestion.title}
          options={currentQuestion.options}
          correctIndex={currentQuestion.correctIndex}
          onSelect={handleSelectOption}
          answer={answers?.[currentQuestionIndex]}
        />
      </div>

      <ResultModal
        isOpen={availableTries <= 0}
        onClose={restart}
        title={"You almost did it"}
        description={"Close modal to start again"}
      />
      <ResultModal
        isOpen={availableTries > 0 && answers.total === exam.questions.length}
        onClose={restart}
        title={"You did it!"}
        description={`Result: ${answers.correct}/${exam.questions.length}. Close modal to start again`}
      />
    </main>
  )
}
