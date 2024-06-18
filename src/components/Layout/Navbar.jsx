import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
  const navlinks = [
    {
      name: 'Beranda',
      href: '/',
    },
    {
      name: 'Katalog',
      href: '/catalojg',
    },
    {
      name: 'Tentang Kami',
      href: '/about',
    },
  ]
  const router = useRouter()
  return (
    <nav className="flex h-[60px] w-full items-center justify-between border bg-white px-6 py-3">
      <div>
        <img src="/assets/mobil.jpg" alt="Bengkel Variasi Mobil" className="h-10" />
      </div>
      <ul className="flex w-auto cursor-pointer items-center justify-between gap-5">
        {navlinks.map((navlink, index) => (
          <li key={index} onClick={() => router.push(navlink.href)}>
            {navlink.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
