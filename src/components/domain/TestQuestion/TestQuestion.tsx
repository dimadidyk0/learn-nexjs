import React from 'react';
import cx from 'classnames';
import s from './TestQuestion.module.css';

export default function TestQuestion({ title, options, onSelect, correctOption, isCorrect, correctIndex, currentIndex }) {
  return (
    <div>
      <div className={s.question}>
        {title}
      </div>

      <div className={s.options}>
        {options.map((option, index) => (
          <div
            key={option}
            className={cx(s.option, {
              [s.correct]: correctOption === option && isCorrect,
              [s.incorrect]: correctOption === option && !isCorrect,
            })}
            onClick={() => onSelect(currentIndex, option, index === correctIndex)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}
