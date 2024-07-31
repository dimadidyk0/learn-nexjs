"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import FullHeartIcon from '@mui/icons-material/Favorite';
import EmptyHeartIcon from '@mui/icons-material/FavoriteBorder';
import CloseIcon from '@mui/icons-material/Close';
import { exam } from './exam';
import s from './page.module.css';
import TestQuestion from '@/components/domain/TestQuestion/TestQuestion';
import ResultModal from './components/ResulModal/ResultModal';
import ExamHeader from './components/ExamHeader/ExamHeader';

export default function ExamPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(false);
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

  useEffect(() => {
    if (availableTries <= 0 || answers.total === exam.questions.length) {
      setIsModalOpen(true);
    }
  }, [setIsModalOpen, availableTries, answers.total])

  const currentQuestion = exam.questions[currentQuestionIndex];

  const isSuccessfullyDone = availableTries > 0 && answers.total === exam.questions.length;

  return (
    <main>
      <p>Exam <b>{params.id}</b></p>

      <div>
        <ExamHeader
          availableTries={availableTries}
          totalTries={exam.tries}
          answeredAmount={answers.total}
          totalAmount={exam.questions.length}
        />

        <TestQuestion
          title={currentQuestion.title}
          options={currentQuestion.options}
          correctIndex={currentQuestion.correctIndex}
          onSelect={handleSelectOption}
          answer={answers?.[currentQuestionIndex]}
        />
      </div>

      <ResultModal
        isOpen={isModalOpen}
        onClose={restart}
        title={isSuccessfullyDone ? "You did it!" : "You almost did it"}
        description={`Result: ${answers.correct}/${exam.questions.length}. Close modal to start again`}
      />
    </main>
  )
}
