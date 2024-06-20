import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowBack } from 'react-icons/io'

import { APIAuth } from '../../utils/API.type'

function LoginForm({ role, setShowForm }) {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const onSubmit = async val => {
    const payload = {
      ...val,
      userRole: role,
    }
    try {
      const response = await axios.post(APIAuth.LOGIN, payload, {
        withCredentials: true,
      })

      if (response?.data?.statusCode === 200) {
        const { accessToken, refreshToken, userRole } = response.data.data
        Cookies.set('token', accessToken)
        Cookies.set('refreshtoken', refreshToken)
        Cookies.set('userrole', userRole)
        if (userRole === 'ADMIN') {
          router.push('/admin/product')
        } else {
          router.push('/client')
        }
      } else {
        console.log('Login failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-auto w-[450px] flex-col gap-y-7 rounded-2xl bg-white bg-opacity-50 px-10 py-5 shadow-xl">
      <div className="flex w-full items-center justify-between">
        <IoIosArrowBack className="-ml-1 h-7 w-7 cursor-pointer" onClick={() => setShowForm(false)} />
        <h1 className="text-lg font-semibold">Masuk Sebagai {role === 'admin' ? 'Admin' : 'Pelanggan'}</h1>
      </div>
      <form className="flex h-full w-full flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="email">Masukkan Email</label>
          <input type="email" id="email" className="rounded-md p-3" {...register('email', { required: true })} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Kata Sandi</label>
          <input
            type="password"
            id="password"
            className="rounded-md p-3"
            {...register('password', { required: true })}
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-4/5 rounded-full bg-red-700 p-2 px-12 text-white">
            Masuk
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
