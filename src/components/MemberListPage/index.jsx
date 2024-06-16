import React from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { HiInformationCircle } from 'react-icons/hi'

function MemberListPage() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "http://localhost:4000/customer"
  //     );
  //     const responseData = await response.json();
  //     // console.log(responseData)
  //     setData(responseData.data);
  //     return responseData.data;
  //   };
  //   fetchData();
  // }, []);

  return (
    <section className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold leading-tight">Pelanggan Terdaftar</h2>
        <button className="rounded-md bg-white px-4 py-2 text-sm">Tambah</button>
      </div>
      <div className="inline-block max-h-[500px] min-w-full overflow-hidden rounded-lg shadow-lg hover:overflow-y-scroll">
        <table className="min-w-full overflow-scroll bg-white leading-normal">
          <thead>
            <tr>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                No
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nama
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Kendaraan
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nomor Kendaraan
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Nomor Telepon
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Total Poin
              </th>
              <th className="border-red border-b bg-teal-400 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {{ ...new Array(4) }.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'hover:bg-gray-200' : 'bg-gray-10 hover:bg-gray-200'}>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{index + 1}</td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{item.name}</td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{item.vehicle}</td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{item.police_number}</td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{item.phone_number}</td>
                <td className="border-gray-200 bg-white px-5 py-5 text-sm">{item.total_point}</td>
                <td className="gap-x-2 border-gray-200 bg-white px-5 py-5 text-sm">
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Lihat Detail"
                    type="button"
                    className="mx-1 rounded-[6px] bg-teal-400 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <HiInformationCircle className="h-5 w-5" />
                  </button>
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Edit Data"
                    type="button"
                    className="mx-1 rounded-[6px] bg-teal-400 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <BsPencilSquare className="h-5 w-5" />
                  </button>
                  <button
                    data-twe-toggle="tooltip"
                    data-twe-html="true"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    title="Hapus Data"
                    type="button"
                    className="mx-1 rounded-[6px] bg-red-500 p-2 text-[14px] font-normal text-gray-50"
                  >
                    <BiTrashAlt className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default MemberListPage
