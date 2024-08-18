import React from 'react';
import cx from 'classnames';
import s from './TestQuestion.module.css';

interface Props {
  title: string;
  options: string[];
  onSelect: (b: string, c: boolean) => void;
  correctIndex: number;
  answer: { option: string; isCorrect: boolean };
}
export default function TestQuestion({
  title,
  options,
  onSelect,
  correctIndex,
  answer,
}: Props) {
  return (
    <>
      <div className={s.question}>{title}</div>

      <div className={s.options}>
        {options.map((option, index) => (
          <div
            key={option}
            className={cx(s.option, {
              [s.correct]: answer?.option === option && answer.isCorrect,
              [s.incorrect]: answer?.option === option && !answer.isCorrect,
            })}
            onClick={() => onSelect(option, index === correctIndex)}
          >
            {option}
          </div>
        ))}
      </div>
    </>
  );
}
