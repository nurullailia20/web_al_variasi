import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

import mobil from '../../../public/assets/mobil.jpg'
import ActiveSlider from './ActiveSlider'

function Homepage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
      <div className="flex h-[300px] max-w-[700px] items-center justify-center">
        <ActiveSlider />
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-end">
          <Link href="/catalog" className="text-md flex items-center gap-x-1 text-white">
            Lihat Katalog
            <IoIosArrowForward className="h-5 w-5" />
          </Link>
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
    </div>
  )
}

export default Homepage
