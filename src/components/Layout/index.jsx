import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  // const [isLogin, setIsLogin] = useState(false);

  // // Fungsi untuk menangani login yang bisa kamu pasing dari komponen anak ke Layout
  // const handleLogin = () => {
  //   setIsLogin(true);
  // };
  const { pathname } = useRouter();

  return (
    <>
      {pathname == "/product" || "/member" ? (
        <div className="w-full h-screen flex flex-col">
          <Header />
          <Navbar />

          <main className="flex-1 bg-[url('/assets/background.jpg')] bg-cover bg-opacity-75">
            {children}
          </main>
        </div>
      ) : (
        <div className="w-full h-screen p-5 flex gap-5 bg-[url('/assets/background.jpg')] bg-cover bg-opacity-75">
          <SideBar />

          <main className="flex-1 flex flex-col gap-y-8 bg-cover bg-opacity-75">
            <ProfileCard/>
            <section className="flex-1">{children}</section>
          </main>
        </div>
      )}
    </>
  );
}


