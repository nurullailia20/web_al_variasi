import Image from 'next/image';
import React from 'react'

function ProductCard({image, productUrl}) {
  return (
    <div className='flex flex-col w-full h-[400px] p-7 gap-4'>
      <div className="w-full h-full rounded-lg overflow-hidden">

      <Image src={image} alt="Product" />
      </div>
      <button onClick={() => window.location.href = productUrl} className="bg-white border-red rounded-lg">LIHAT DETAIL BARANG</button>          
    </div>
  );
}

export default ProductCard
