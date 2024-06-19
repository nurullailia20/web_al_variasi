import axios from 'axios'
// import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'
import { BiTrashAlt } from 'react-icons/bi'
import { BsPencilSquare } from 'react-icons/bs'
import { HiInformationCircle } from 'react-icons/hi'

import { APIProduct } from '../../utils/API.type'
import { config } from '../../utils/config'
import ProductModal from '../form/ProductModal'
import Pagination from '../Layout/Pagination'

function ProductListPage() {
  const [data, setData] = React.useState([])
  const [formModalState, setFormModalState] = React.useState({ open: false, selectedId: undefined })
  const router = useRouter()

  const handleModal = (open, selectedId = '') => {
    setFormModalState({ open, selectedId })
  }

  const handleDelete = async id => {
    try {
      const response = await axios.delete(config.APIUrl + APIProduct.DELETE_PRODUCT + id)
      alert(response.data.message)
      router.reload()
      return response
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(config.APIUrl + APIProduct.GET_ALL_PRODUCTS)
      setData(response.data.data)
      console.log(response.data.data)
    }
    fetchData()
  }, [])

  return (
    <section className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-white">Daftar Produk</div>
        <button className="rounded-md bg-white px-4 py-2 text-sm" onClick={() => handleModal(!formModalState.open)}>
          <span>Tambah</span>
        </button>
      </div>
      <div className="flex h-full min-w-full flex-col justify-between overflow-hidden rounded-lg shadow-lg">
        <table className="min-w-full overflow-scroll bg-white leading-normal">
          <thead>
            <tr>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">No</th>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">Nama Barang</th>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">Jumlah Stok</th>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">Harga Barang</th>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">Tanggal Masuk Barang</th>
              <th className="border-b px-5 py-3 text-left text-xs font-semibold uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'hover:bg-gray-100' : 'bg-gray-100 hover:bg-gray-100'}>
                <td className="border-gray-2 px-5 py-5 text-sm">{index + 1}</td>
                <td className="px-5 py-5 text-sm capitalize">{item.name}</td>
                <td className="px-5 py-5 text-sm">{item.stock}</td>
                <td className="px-5 py-5 text-sm">{item.price}</td>
                <td className="px-5 py-5 text-sm">{item.date_in}</td>
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
                    onClick={() => handleModal(!formModalState.open, item.id)}
                    className="rounded-[6px] text-[14px] font-normal"
                  >
                    <BsPencilSquare className="h-7 w-7 text-gray-700" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
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
      {formModalState.open && (
        <ProductModal
          open={formModalState.open}
          setOpen={open => handleModal(open)}
          selectedId={formModalState.selectedId}
        />
      )}
    </section>
  )
}

export default ProductListPage
