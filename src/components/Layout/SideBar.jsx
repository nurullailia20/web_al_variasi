import { useRouter } from "next/navigation";
import React from "react";
import { BiBook, BiLogOut } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { FaClipboardList, FaProductHunt, FaUsers } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

function SideBar() {
  const sidelinks = [
    {
      // name: "Daftar Produk",
      link: "/",
      icon: <BsBagCheckFill />,
    },
    {
      // name: "Daftar Pelanggan",
      link: "/member",
      icon: <FaUsers />,
    },
    {
      // name: "Riwayat Perbaikan",
      link: "/service-history",
      icon: <FaClipboardList />,
    },
  ];
  const router = useRouter();
  return (
    <div className="h-full w-[60px] border flex flex-col justify-between items-center rounded-full p-5 bg-white">
      <div className="flex flex-col gap-y-6 ">
        <div>Al-Variasi</div>
        <ul>
          {sidelinks.map((sidelink) => (
            <li
              // key={sidelink.name}
              onClick={() => router.push(sidelink.link)}
              className="flex gap-3 cursor-pointer py-10 px-4 hover:bg-gray-100"
            >
              <span >{sidelink.icon}</span>
              {/* <span>{sidelink.name}</span> */}
            </li>
          ))}
        </ul>
      </div>
      <button className="flex gap-3 cursor-pointer py-3 px-4 hover:bg-gray-100">
        <span>
          <TbLogout2 />
        </span>
        {/* <span>Keluar</span> */}
      </button>
    </div>
  );
}

export default SideBar;