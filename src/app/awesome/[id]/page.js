import Link from 'next/link'
import React from 'react'

export default function AwesomePostPage({ params }) {
  return (
    <main>
      <p>AwesomePage <b>{params.id}</b></p>
      <br />
      <Link href={"/awesome"}>Go back</Link>
    </main>
  )
}
