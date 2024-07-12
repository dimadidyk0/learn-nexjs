import Link from 'next/link'
import React from 'react'

export default function ExamPage({ params }) {
  return (
    <main>
      <p>Exam <b>{params.id}</b></p>
      <br />
      <Link href={"/"}>Go home</Link>
    </main>
  )
}
