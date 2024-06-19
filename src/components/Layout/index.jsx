import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import SideBar from './SideBar'

const adminPathnames = ['/admin/product', '/admin/member', '/admin/service-history']

export default function Layout({ children }) {
  const router = useRouter()

  React.useEffect(() => {
    const token = Cookies.get('token')
    const userRole = Cookies.get('userrole')

    if (adminPathnames.includes(router.pathname)) {
      if (!token) {
        router.push('/login')
      } else if (userRole !== 'ADMIN') {
        router.push('/')
      }
    }
  }, [router])

  return (
    <>
      {adminPathnames.includes(router.pathname) ? (
        <div className="flex h-screen w-full gap-10 bg-opacity-75 bg-[url('/assets/background.jpg')] bg-cover p-12">
          <SideBar />
          <main className="flex flex-1 flex-col gap-y-8 bg-opacity-75 bg-cover">
            <ProfileCard />
            <section className="flex-1">{children}</section>
          </main>
        </div>
      ) : (
        <div className="flex h-screen w-full flex-col">
          <Header />
          <Navbar />
          <main className="flex-1 bg-opacity-75 bg-[url('/assets/background.jpg')] bg-cover p-12">{children}</main>
        </div>
      )}
    </>
  )
}
