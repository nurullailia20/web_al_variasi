import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import gambar from '../../../public/assets/gambar1.jpg'

const ActiveSlider = () => {
  // const images = [1, 2, 3, 4, 5];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="h-full w-full">
      {[...new Array(20)].map(image => (
        <SwiperSlide
          key={image}
          className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg text-center"
        >
          <Image src={gambar} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ActiveSlider
