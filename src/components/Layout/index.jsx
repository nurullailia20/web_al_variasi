import { useRouter } from 'next/router'
import React from 'react'

import Header from './Header'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import SideBar from './SideBar'

export default function Layout({ children }) {
  // export default function Layout({ children }) {
  //   // const [isLogin, setIsLogin] = useState(false);

  //   // // Fungsi untuk menangani login yang bisa kamu pasing dari komponen anak ke Layout
  //   // const handleLogin = () => {
  //   //   setIsLogin(true);
  //   // };
  const { pathname } = useRouter()
  return (
    <>
      {pathname === '/product' || pathname === '/member' || pathname === '/service-history' ? (
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

          <main className="flex-1 bg-opacity-75 bg-[url('/assets/background.jpg')] bg-cover">{children}</main>
        </div>
      )}
    </>
  )
}
