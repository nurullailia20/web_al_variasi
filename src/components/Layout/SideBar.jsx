import { useRouter } from 'next/navigation'
import React from 'react'
import { BsBagCheckFill } from 'react-icons/bs'
import { FaClipboardList, FaUsers } from 'react-icons/fa'
import { TbLogout2 } from 'react-icons/tb'

function SideBar() {
  const sidelinks = [
    {
      // name: "Daftar Produk",
      link: '/',
      icon: <BsBagCheckFill />,
    },
    {
      // name: "Daftar Pelanggan",
      link: '/member',
      icon: <FaUsers />,
    },
    {
      // name: "Riwayat Perbaikan",
      link: '/service-history',
      icon: <FaClipboardList />,
    },
  ]
  const router = useRouter()
  return (
    <div className="flex h-full w-[60px] flex-col items-center justify-between rounded-full border bg-white p-5">
      <div className="flex flex-col gap-y-6 ">
        <div>Al-Variasi</div>
        <ul>
          {sidelinks.map(sidelink => (
            <li
              // key={sidelink.name}
              onClick={() => router.push(sidelink.link)}
              className="hover:bg-gray-100 flex cursor-pointer gap-3 px-4 py-10"
            >
              <span>{sidelink.icon}</span>
              {/* <span>{sidelink.name}</span> */}
            </li>
          ))}
        </ul>
      </div>
      <button className="hover:bg-gray-100 flex cursor-pointer gap-3 px-4 py-3">
        <span>
          <TbLogout2 />
        </span>
        {/* <span>Keluar</span> */}
      </button>
    </div>
  )
}

export default SideBar
