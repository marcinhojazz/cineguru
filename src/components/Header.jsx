import Link from 'next/link'
import Logo from './Logo'
import MenuButton from './MenuButton'
import Navlinks from './Navlinks'

export default function Header() {
  return (
    <header className='flex justify-between py-4 bg-[#ffb804] text-white'>
      <Logo />
      <div>
        {/* Navlink desktop */}
        <Navlinks className="hidden lg:flex" />

        {/* Menu Button */}
        <MenuButton />
      </div>
    </header>

  )
}
