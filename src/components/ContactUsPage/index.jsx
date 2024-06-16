import React from 'react'
import { BsTools } from 'react-icons/bs'

function ContactUsPage() {
  return (
      <div className="flex flex-col p-8 gap-y-5">
        <div className="font-bold text-xl">Hubungi Kami</div>
        <div className="w-[770px] bg-white border-red border-2 rounded-xl p-4">
          <div className="flex items-center p-5 gap-5">
            <div className="text-6xl">
              <BsTools/>
            </div>
            <div>
              Jika Anda memiliki pertanyaan atau masukan terkait layanan kami, silakan klik tombol berikut agar kami dapat melayani anda lebih baik. 
            </div>
          </div>
          <div className="flex justify-end px-7">
            <button href="https://wa.me\6289518006899" className="w-[130px] h-[40px] border-2 border-red rounded-full font-bold">KONTAK</button>
          </div>
        </div>
      </div>
  )
}

export default ContactUsPage
