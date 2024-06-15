import { useRouter } from 'next/navigation'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FaLocationPin } from 'react-icons/fa6'
import { PiPhoneCall } from 'react-icons/pi'

function Header() {
  const headerLinks = [
    {
      name: 'Hubungi Kami',
      link: '#',
      icon: <PiPhoneCall />,
    },
    {
      name: 'Balikpapan',
      link: '#',
      icon: <FaLocationPin />,
    },
    {
      name: 'Masuk',
      link: '/login',
      icon: <BiUserCircle />,
    },
  ]

  const router = useRouter()
  return (
    <header className="flex h-10 w-full items-center justify-end bg-red px-5">
      <ul className="flex gap-x-5 ">
        {headerLinks.map(headerLink => (
          <li
            key={headerLink.name}
            onClick={() => router.push(headerLink.link)}
            className="flex cursor-pointer items-center gap-1"
          >
            <span className="text-white">{headerLink.icon}</span>
            <span className="text-white">{headerLink.name}</span>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
