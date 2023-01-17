import React, { useState } from 'react'
import Navlinks from './Navlinks'

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button className="lg:hidden text=gray-800 font-medium focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        Menu
      </button>
      {menuOpen && (
        <div className="bg-white absolute right-0 py-2 rounded-md shadow-xl border w-2/3">
          <Navlinks />
        </div>
      )}
    </>

  )
}
