import Link from 'next/link'
import React from 'react'

export default function MealDetailsPage({ params }) {
  return (
    <main>
      <p>Meal Details <b>{params.id}</b></p>
      <br />
      <Link href={"/"}>Go home</Link>
    </main>
  )
}
