import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { FaClipboardList, FaUsers } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'

function SideBar() {
  const sidelinks = [
    {
      link: '/product',
      icon: <BsBagCheckFill />,
    },
    {
      link: '/member',
      icon: <FaUsers />,
    },
    {
      link: '/service-history',
      icon: <FaClipboardList />,
    },
  ]
  const router = useRouter()
  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('refreshtoken')
    router.push('/login')
  }
  return (
    <div className="flex h-full w-16 flex-col items-center justify-between rounded-full bg-white py-5">
      <div className="cursor-pointer" onClick={() => router.push('/')}>
        Al-Variasi
      </div>
      <ul className="flex w-full flex-col items-center justify-between gap-y-10 py-5">
        {sidelinks.map(sidelink => (
          <li
            key={sidelink.link}
            onClick={() => router.push(sidelink.link)}
            className="flex h-16 w-full cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-red-600"
          >
            {sidelink.icon}
          </li>
        ))}
      </ul>
      <button
        className="flex h-16 w-full cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-red-600"
        onClick={handleLogout}
      >
        <TbLogout2 />
      </button>
    </div>
  )
}

export default SideBar
