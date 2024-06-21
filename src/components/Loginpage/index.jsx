import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

import LoginForm from './LoginForm'

function Loginpage() {
  const [role, setRole] = React.useState('')
  const [showForm, setShowForm] = React.useState(false)

  const router = useRouter()

  React.useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      router.push('/')
    }
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      {!showForm ? (
        <div className="flex flex-col gap-y-5">
          <button
            className="rounded-full bg-white px-10 py-3 hover:border-red-700"
            onClick={() => {
              setShowForm(true)
              setRole('admin')
            }}
          >
            Masuk Sebagai Admin
          </button>
          <button
            className="rounded-full bg-white px-10 py-3 hover:border-red-700"
            onClick={() => {
              setShowForm(true)
              setRole('pelanggan')
            }}
          >
            Masuk Sebagai Pelanggan
          </button>
        </div>
      ) : (
        <LoginForm role={role} setShowForm={setShowForm} />
      )}
    </div>
  )
}

export default Loginpage
