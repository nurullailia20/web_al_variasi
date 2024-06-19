import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import { APIProduct } from '../../utils/API.type'
import { config } from '../../utils/config'

export default function ProductModal({ open, setOpen, selectedId = '' }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const { reload } = useRouter()

  const toggleModal = () => {
    setOpen(!open)
  }

  const [data, setData] = React.useState({})

  React.useEffect(() => {
    const getProduct = async id => {
      const response = await axios.get(config.APIUrl + APIProduct.GET_DETAILS_PRODUCT + id)
      setData(response.data.data)
    }
    console.log(data)
    if (selectedId) {
      getProduct(selectedId)
    }
  }, [selectedId])

  React.useEffect(() => {
    if (selectedId) {
      setValue('name', data.name)
      setValue('stock', data.stock)
      setValue('price', data.price)
      setValue('warranty', data.warranty)
      setValue('description', data.description)
      setValue('color', data.color)
      setValue('image', data.image)
      setValue('date_in', data.date_in)
    }
  }, [selectedId, data])

  const onSubmit = async val => {
    try {
      let response
      if (selectedId) {
        response = await axios.put(config.APIUrl + APIProduct.UPDATE_PRODUCT + selectedId, val)
      } else {
        response = await axios.post(config.APIUrl + APIProduct.ADD_PRODUCT, val)
      }
      alert(response.data.message)
      reload()
      return response
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog as="div" className="relative z-10 focus:outline-none" onClose={toggleModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-0"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="flex w-full max-w-3xl flex-col space-y-5 rounded-xl border bg-white p-5 shadow-xl">
                <DialogTitle as="h3" className="text-xl font-medium">
                  {selectedId ? 'Perbarui ' : 'Masukkan '} Data Produk
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-7">
                  <div className="grid w-full grid-cols-2 gap-x-5">
                    <div className="flex w-full flex-col gap-y-3">
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="name">Nama Barang</label>
                        <input
                          type="text"
                          {...register('name', { required: true })}
                          placeholder="Nama Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="color">Warna Barang</label>
                        <input
                          type="text"
                          {...register('color', { required: true })}
                          placeholder="Warna Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.color && <p className="text-red-500">{errors.color.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="stock">Jumlah</label>
                        <input
                          type="text"
                          {...register('stock', {
                            required: true,
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Only numbers are allowed',
                            },
                          })}
                          placeholder="Jumlah"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.stock && <p className="text-red-500">{errors.stock.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="price">Harga Barang</label>
                        <input
                          type="text"
                          {...register('price', {
                            required: true,
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Only numbers are allowed',
                            },
                          })}
                          placeholder="Harga Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                      </div>
                    </div>
                    <div className="flex w-full flex-col gap-y-3">
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="warranty">Garansi (tahun)</label>
                        <input
                          type="text"
                          {...register('warranty', {
                            required: true,
                            pattern: {
                              value: /^[0-9]+$/,
                              message: 'Only numbers are allowed',
                            },
                          })}
                          placeholder="Garansi (tahun)"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.warranty && <p className="text-red-500">{errors.warranty.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="description">Deskripsi Barang</label>
                        <input
                          type="text"
                          {...register('description', { required: true })}
                          placeholder="Deskripsi Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="date_in">Tanggal Masuk Barang</label>
                        <input
                          type="date"
                          {...register('date_in')}
                          placeholder="Tanggal Masuk Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.date_in && <p className="text-red-500">{errors.date_in.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="image">Gambar Barang</label>
                        <input
                          type="text"
                          {...register('image', { required: true })}
                          placeholder="Gambar Barang"
                          className="rounded-md border-2 px-3 py-2 focus:outline-none"
                        />
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button className="w-52 cursor-pointer items-center gap-2 rounded-full bg-red-700 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline data-[focus]:outline-1 data-[focus]:outline-white">
                      {selectedId.length > 0 ? 'Simpan ' : 'Tambah '}
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
