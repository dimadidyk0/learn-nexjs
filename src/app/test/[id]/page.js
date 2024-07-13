import Link from 'next/link'
import React from 'react'

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
        <header>
          <div>{exam.tries.used}/{exam.tries.total}</div>
          <div>{exam.questions.answered}/{exam.questions.total}</div>
          <button>X</button>
        </header>

        <div>
          {exam.questions.data[0].question}
        </div>

        <div>
          {exam.questions.data[0].options.map(([option, isCorrect]) => (
            <div key={option}>{option}</div>
          ))}
        </div>
      </div>
    </main>
  )
}
