import { useRouter } from 'next/router'
import React from 'react'

function LoginForm() {
  const router = useRouter()
  // const [isLogin, setIsLogin] = useState(false);

  const handleLogin = event => {
    event.preventDefault()
    // setIsLogin(true);
    router.push('/product')
  }

  return (
    <div className="flex h-auto w-[450px] flex-col gap-y-7 rounded-2xl bg-white bg-opacity-50 px-10 py-5 shadow-xl">
      <div className="text-center text-xl font-semibold">Masuk Sebagai Admin</div>
      <form className="flex h-full w-full flex-col gap-y-5" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="name">Masukkan Nama</label>
          <input type="text" id="name" className="rounded-md p-3" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Kata Sandi</label>
          <input type="password" id="password" className="rounded-md p-3" />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="w-4/5 rounded-full bg-white p-2 px-12">
            Masuk
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
