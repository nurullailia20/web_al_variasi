import { Swiper, SwiperSlide } from "swiper/react";

import gambar from "../../../public/assets/gambar1.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const ActiveSlider = () => {
  // const images = [1, 2, 3, 4, 5];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="h-full w-full">
      {[...new Array(20)].map((image) => (
        <SwiperSlide key={image} className="w-full flex justify-center items-center text-center h-full rounded-lg overflow-hidden">
          <Image src={gambar} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ActiveSlider;