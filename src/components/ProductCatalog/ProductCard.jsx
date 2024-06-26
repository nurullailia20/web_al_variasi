import Image from 'next/image'
import React from 'react'

function ProductCard({ image, productUrl }) {
  return (
    <div className="flex h-[400px] w-full flex-col justify-center gap-4 p-7">
      <div className="h-full w-full overflow-hidden rounded-lg">
        <Image src={image} alt="Product" />
      </div>
      <button onClick={() => (window.location.href = productUrl)} className="rounded-lg border-red-700 bg-white py-2">
        LIHAT DETAIL BARANG
      </button>
    </div>
  )
}

export default ProductCard
