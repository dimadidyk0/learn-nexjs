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
          onSelect={handleSelectOption}
          correctOption={answers?.[currentQuestionIndex]?.option}
          isCorrect={answers?.[currentQuestionIndex]?.isCorrect}
          correctIndex={currentQuestion.correctIndex}
          currentIndex={currentQuestionIndex}
        />
      </div>

      <Modal
        open={availableTries <= 0}
        onClose={restart}
      >
        <Box className={s.modal}>
          <Typography className={s.modalTitle} id="modal-modal-title" variant="h4" component="h2">
            You almost did it
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Close modal to start again
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={availableTries > 0 && answers.total === exam.questions.length}
        onClose={restart}
      >
        <Box className={s.modal}>
          <Typography className={s.modalTitle} id="modal-modal-title" variant="h4" component="h2">
            You did it!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Result: {answers.correct}/{exam.questions.length}. Close modal to start again
          </Typography>
        </Box>
      </Modal>
    </main>
  )
}
