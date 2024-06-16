import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ProductModal({ open, setOpen, selectedId = '' }) {
  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors },
  } = useForm()

  // const { reload } = useRouter()

  const toggleModal = () => {
    setOpen(!open)
  }

  // const [data, setData] = useState({})

  // useEffect(() => {
  //   const getProduct = async id => {
  //     const response = await axios.get(`http://localhost:4000/product/${id}`)
  //     setData(response.data.data)
  //   }
  //   getProduct(selectedId)
  // }, [selectedId])

  // useEffect(() => {
  //   if (selectedId) {
  //     setValue('name', data.name)
  //     setValue('stock', data.stock)
  //     setValue('price', data.price)
  //     setValue('date_in', data.date_in)
  //   }
  // }, [selectedId, data])

  const onSubmit = async val => {
    // try {
    //   let response
    //   if (selectedId) {
    //     response = await axios.put(`http://localhost:4000/product/${selectedId}`, val)
    //   } else {
    //     response = await axios.post('http://localhost:4000/product', val)
    //   }
    //   alert(response.data.message)
    //   reload()
    //   return response
    // } catch (error) {
    //   console.log(error)
    // }
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
              <DialogPanel className="flex w-full max-w-md flex-col space-y-5 rounded-xl bg-white p-5 shadow-xl">
                <DialogTitle as="h3" className="text-xl font-medium">
                  {selectedId ? 'Perbarui ' : 'Masukkan '} Data Produk
                </DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="name">Nama Barang</label>
                    <input
                      type="text"
                      {...register('name', { required: true })}
                      placeholder="Nama Barang"
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {/* {errors ? (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    ) : null} */}
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
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    {/* {errors &&
                      <span className="text-red-500 text-sm">
                        Only numbers are allowed
                      </span>
                    } */}
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
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    {/* {errors &&
                      <span className="text-red-500 text-sm">
                        Only numbers are allowed
                      </span>
                    } */}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <label htmlFor="date_in">Tanggal Masuk Barang</label>
                    <input
                      type="date"
                      {...register('date_in')}
                      placeholder="Tanggal Masuk Barang"
                      className="rounded-md border px-3 py-2 focus:outline-none"
                    />
                    {/* {errors ? (
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>
                    ) : null} */}
                  </div>

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
