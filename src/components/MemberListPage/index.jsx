import axios from 'axios'
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'
import React from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { HiInformationCircle } from 'react-icons/hi'

import { APIAuth } from '../../utils/API.type'
import Pagination from '../Layout/Pagination'

function MemberListPage() {
  const [data, setData] = React.useState([])

  // const router = useRouter()

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(APIAuth.GET_CUSTOMERS)
      setData(response.data.data)
      return response.data.data
    }
    // const checkAuth = () => {
    //   const token = Cookies.get('token')
    //   const role = Cookies.get('userrole')
    //   if (!token && role !== 'ADMIN') {
    //     router.push('/')
    //   }
    // }
    // checkAuth()
    fetchData()
  }, [])

  return (
    <section className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-white">Daftar Pelanggan</div>
        <button className="rounded-md bg-white px-4 py-2 text-sm">Tambah</button>
      </div>
      <div className="flex h-full min-w-full flex-col justify-between overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full overflow-scroll bg-white leading-normal">
          <thead>
            <tr>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                No
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nama
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Kendaraan
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nomor Kendaraan
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nomor Telepon
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Total Poin
              </th>
              <th className="border-red border-b px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'hover:bg-gray-100' : 'bg-gray-100 hover:bg-gray-100'}>
                <td className="px-5 py-5 text-sm">{index + 1}</td>
                <td className="px-5 py-5 text-sm capitalize">{item.name}</td>
                <td className="px-5 py-5 text-sm">{item.customer_items?.[0]?.vehicle}</td>
                <td className="px-5 py-5 text-sm">{item.customer_items?.[0]?.police_number}</td>
                <td className="px-5 py-5 text-sm">{item.phone_number}</td>
                <td className="px-5 py-5 text-sm">{item.total_point}</td>
                <td className="flex gap-x-2 px-5 py-5 text-sm">
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Lihat Detail"
                    type="button"
                    className="rounded-[6px] text-[14px] font-normal"
                  >
                    <HiInformationCircle className="h-7 w-7 text-gray-700" />
                  </button>
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Edit Data"
                    type="button"
                    className="rounded-[6px] text-[14px] font-normal"
                  >
                    <BsPencilSquare className="h-7 w-7 text-gray-700" />
                  </button>
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Hapus Data"
                    type="button"
                    className="rounded-[6px] text-[14px] font-normal"
                  >
                    <BiTrashAlt className="h-7 w-7 text-gray-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </section>
  )
}

export default MemberListPage
