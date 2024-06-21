import React from 'react'

const names: string[] = ['Jack', 'Patrick'];

export default function Post() {
  const chosenName: string = Math.random() >= 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>Name: {chosenName}</p>
      <p>Description</p>
    </div>
  )
}
