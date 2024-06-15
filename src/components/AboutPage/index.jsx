import Image from 'next/image'
import React from 'react'

import mobil from '../../../public/assets/mobil.jpg'

function AboutPage() {
  return (
    <div className="w-full">
      <div className="border-bottom flex h-full flex-col gap-5 border-white p-8">
        <div className="font-bold">Tentang Al Variasi</div>
        <div className="h-[200px] w-[450px] overflow-hidden rounded-xl">
          <Image src={mobil} alt="Mobil Modifikasi" />
        </div>
        <div>
          AL Variasi merupakan destinasi terpercaya untuk pecinta mobil sejak 2014. Sebagai pionir dalam industri
          variasi mobil, kami telah mendedikasikan diri untuk menyediakan layanan dan produk terbaik bagi pelanggan
          kami. Dengan komitmen kami terhadap kualitas, inovasi, dan kepuasan pelanggan, kami telah membangun reputasi
          yang kuat dalam menyediakan solusi variasi mobil berkualitas tinggi yang sesuai dengan kebutuhan dan gaya unik
          setiap pelanggan.
          <br />
          Kami menawarkan beragam produk dan layanan, mulai dari modifikasi eksterior dan interior hingga peningkatan
          kinerja, untuk memastikan bahwa mobil Anda tidak hanya terlihat menakjubkan tetapi juga berperforma optimal.
          Kami yang berpengalaman siap membantu Anda dalam mengubah visi Anda tentang mobil menjadi kenyataan.
        </div>
      </div>
      <div className="flex flex-col items-center p-5">
        <div className="text-xl">MITRA BISNIS</div>
        <div>
          <img src="" alt="Denso Logo" />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
