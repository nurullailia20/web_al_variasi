import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

import { APIAuth } from '../../utils/API.type'

function LoginForm({ handleForm }) {
  const router = useRouter()
  const { handleSubmit, register } = useForm()

  const onSubmit = async val => {
    const payload = {
      ...val,
      userRole: 'ADMIN',
    }
    try {
      const response = await axios.post(APIAuth.LOGIN, payload, {
        withCredentials: true,
      })

      if (response?.data?.statusCode === 200) {
        const { accessToken, refreshToken, username, userRole, redirectUrl } = response.data.data
        Cookies.set('token', accessToken)
        Cookies.set('refreshtoken', refreshToken)
        Cookies.set('username', username)
        Cookies.set('userrole', userRole)
        router.push(redirectUrl)
        console.log(username)
      } else {
        alert('Login gagal, silakan coba kembali!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex h-auto w-[450px] flex-col gap-y-7 rounded-2xl bg-white bg-opacity-50 px-10 py-5 shadow-xl">
      <h1 className="text-xl font-semibold">Login</h1>
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
        <div className="flex flex-col items-center justify-center gap-y-2">
          <button type="submit" className="w-4/5 rounded-full bg-red-700 p-2 px-12 text-white">
            Masuk
          </button>
          <div className="flex items-center gap-x-1 text-sm">
            Belum memiliki akun?{' '}
            <div className="cursor-pointer text-blue-700" onClick={handleForm}>
              Daftar
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
