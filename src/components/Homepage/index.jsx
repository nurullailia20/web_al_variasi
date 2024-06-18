import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import mobil from '../../../public/assets/mobil.jpg'
import ActiveSlider from './ActiveSlider'

function Homepage() {
  const router = useRouter()

  React.useEffect(() => {
    const token = Cookies.get('token')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <div className="flex h-[300px] max-w-[700px] items-center justify-center">
        <ActiveSlider />
      </div>
      <div className="grid h-[130px] w-[700px] grid-cols-3 gap-3">
        <div className="h-full w-full ">
          <Image src={mobil} />
        </div>
        <div className="h-full w-full ">
          <Image src={mobil} />
        </div>
        <div className="h-full w-full ">
          <Image src={mobil} />
        </div>
      </div>
    </div>
  )
}

export default Homepage
