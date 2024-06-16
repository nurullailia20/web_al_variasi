import React from 'react'
import { BsTools } from 'react-icons/bs'

function ContactUsPage() {
  return (
    <div className="flex flex-col gap-y-5 p-8">
      <div className="text-xl font-bold">Hubungi Kami</div>
      <div className="border-red w-[770px] rounded-xl border-2 bg-white p-4">
        <div className="flex items-center gap-5 p-5">
          <div className="text-6xl">
            <BsTools />
          </div>
          <div>
            Jika Anda memiliki pertanyaan atau masukan terkait layanan kami, silakan klik tombol berikut agar kami dapat
            melayani anda lebih baik.
          </div>
        </div>
        <div className="flex justify-end px-7">
          <button
            href="https://wa.me\6289518006899"
            className="border-red h-[40px] w-[130px] rounded-full border-2 font-bold"
          >
            KONTAK
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
