import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function Loginpage() {
  const [isRegistered, setIsRegistered] = React.useState(true)

  const router = useRouter()

  React.useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      router.push('/')
    }
  }, [])

  return (
    <div className="flex h-full items-center justify-center">
      {isRegistered ? (
        <LoginForm handleForm={() => setIsRegistered(!isRegistered)} />
      ) : (
        <RegisterForm handleForm={() => setIsRegistered(!isRegistered)} />
      )}
    </div>
  )
}

export default Loginpage
