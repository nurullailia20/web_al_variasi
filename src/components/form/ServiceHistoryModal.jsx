import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ServiceHistoryModal({ open, setOpen, selectedId = '' }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const toggleModal = () => {
    setOpen(!open)
  }

  // useEffect(() => {
  //   if (selectedId) {
  //     setValue('name', data.name)
  //     setValue('stock', data.stock)
  //     setValue('price', data.price)
  //     setValue('date_in', data.date_in)
  //   }
  // }, [selectedId, data])

  const onSubmit = async val => {
    console.log(val)
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
              <DialogPanel className="flex w-full max-w-md flex-col space-y-5 rounded-xl border border-teal-400 bg-white p-5 shadow-xl">
                <DialogTitle as="h3" className="text-xl font-medium">
                  {selectedId ? 'Perbarui ' : 'Masukkan '} Riwayat Perbaikan
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                  {selectedId && (
                    <div className="flex flex-col gap-y-1">
                      <label htmlFor="customer_name">Nama Pelanggan</label>
                      <input
                        type="text"
                        {...register('customer_name', { required: true })}
                        placeholder="Nama Pelanggan"
                        className="rounded-md border px-3 py-2 focus:outline-none"
                      />
                      {errors.customer_name && <p className="text-red-500">{errors.customer_name.message}</p>}
                    </div>
                  )}
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="service_date">Tanggal Perbaikan</label>
                    <input
                      type="date"
                      {...register('service_date', {
                        required: true,
                      })}
                      placeholder="Tanggal Perbaikan"
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {errors.service_date && <p className="text-red-500">{errors.service_date.message}</p>}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="service_desc">Keterangan Service</label>
                    <input
                      type="text"
                      {...register('service_desc', {
                        required: true,
                      })}
                      placeholder="Keterangan Service"
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {errors.service_desc && <p className="text-red-500">{errors.service_desc.message}</p>}
                  </div>
                  {selectedId &
                  (
                    <>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="point">Tambahkan Point</label>
                        <input
                          type="text"
                          {...register('point', {
                            required: true,
                          })}
                          placeholder="Tambahkan Point"
                          className="rounded-md border px-3 py-2 focus:outline-none"
                        />
                        {errors.point && <p className="text-red-500">{errors.point.message}</p>}
                      </div>
                      <div className="flex flex-col gap-y-1">
                        <label htmlFor="recomendation">Tambahkan Rekomendasi</label>
                        <input
                          type="text"
                          {...register('recomendation', {
                            required: true,
                          })}
                          placeholder="Tambahkan Rekomendasi"
                          className="rounded-md border px-3 py-2 focus:outline-none"
                        />
                        {errors.recomendation && <p className="text-red-500">{errors.recomendation.message}</p>}
                      </div>
                    </>
                  )}
                  <button className="cursor-pointer items-center gap-2 rounded-full  border bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline data-[focus]:outline-1 data-[focus]:outline-white">
                    {selectedId.length > 0 ? 'Simpan ' : 'Tambah '}
                  </button>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
