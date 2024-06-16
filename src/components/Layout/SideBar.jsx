import { useRouter } from 'next/navigation'
import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { FaClipboardList, FaUsers } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'

function SideBar() {
  const sidelinks = [
    {
      link: '/',
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
  return (
    <div className="flex h-full w-16 flex-col items-center justify-between rounded-full bg-white py-5">
      <div>Al-Variasi</div>
      <ul className="flex w-full flex-col items-center justify-between gap-y-10 py-5">
        {sidelinks.map(sidelink => (
          <li
            onClick={() => router.push(sidelink.link)}
            className="flex h-16 w-full cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-red-600"
          >
            {sidelink.icon}
          </li>
        ))}
      </ul>
      <button className="flex h-16 w-full cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-red-600">
        <TbLogout2 />
      </button>
    </div>
  )
}

export default SideBar
