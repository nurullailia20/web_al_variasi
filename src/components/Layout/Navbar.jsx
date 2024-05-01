import { useRouter } from "next/navigation";
import React from "react";

function Navbar() {
  const navlinks = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Produk",
      href: "/product",
    },
    {
      name: "Tentang Kami",
      href: "/about",
    },
  ];
  const router = useRouter();
  return (
    <nav className="w-full h-[60px] border bg-white flex justify-between items-center px-6 py-3">
      <div>
      <img src="/assets/mobil.jpg" alt="Bengkel Variasi Mobil" className="h-10" />
      </div>
      <ul className="w-auto flex justify-between gap-5 items-center cursor-pointer">
        {navlinks.map((navlink, index) => (
          <li key={index} onClick={() => router.push(navlink.href)}>
            {navlink.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;