import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { FaLocationPin } from 'react-icons/fa6'
import { PiPhoneCall } from 'react-icons/pi'

function Header() {
  const [loginNav, setLoginNav] = React.useState('Keluar')
  const [userToken, setUserToken] = React.useState(null)
  const router = useRouter()

  React.useEffect(() => {
    const token = Cookies.get('token')
    setUserToken(token)
    if (!token) {
      setLoginNav('Masuk')
    } else {
      setLoginNav('Keluar')
    }
  }, [userToken])

  const handleLoginNav = () => {
    if (userToken) {
      Cookies.remove('token')
      Cookies.remove('refreshtoken')
      Cookies.remove('userrole')
      Cookies.remove('username')
      setLoginNav('Keluar')
      router.push('/login')
    } else {
      router.push('/login')
    }
  }

  const headerLinks = [
    {
      name: 'Hubungi Kami',
      link: '/contact-us',
      icon: <PiPhoneCall />,
    },
    {
      name: 'Balikpapan',
      link: '#',
      icon: <FaLocationPin />,
    },
  ]

  return (
    <header className="flex h-10 w-full items-center justify-end bg-red-700 px-5">
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
        <li onClick={handleLoginNav} className="flex cursor-pointer items-center gap-1">
          <span className="text-white">
            <BiUserCircle />
          </span>
          <span className="text-white">{loginNav}</span>
        </li>
      </ul>
    </header>
  )
}

export default Header
