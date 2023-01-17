import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div>
      <Link className="font-bold text-2xl text-white transition hover:text-white/80 hover:underline ease-in-out" href="/">CineGuru</Link>
    </div>
  )
}
