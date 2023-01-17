import Link from 'next/link'
import React, { useState } from 'react'

const listLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
]

export default function Navlinks({ className }) {
  return (
    <ul className={`md:flex lg:flex gap-4 ${className}`}>
      {listLinks.map((link, index) => (
        <li key={link.index}>
          <Link className='block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100' href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}