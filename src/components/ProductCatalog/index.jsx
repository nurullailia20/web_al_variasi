/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'

import gambar from '../../../public/assets/gambar1.jpg'
import { APIProduct } from '../../utils/API.type'
import ProductCard from './ProductCard'

const productsData = [
  {
    image: gambar,
    url: '/product1',
  },
  {
    image: gambar,
    url: '/product2',
  },
  {
    image: gambar,
    url: '/product3',
  },
  {
    image: gambar,
    url: '/product4',
  },
]
// TODO : Implement the data to the ProductCard
function ProductCatalog() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const getProducts = async () => {
      const responses = await axios.get(APIProduct.GET_ALL_PRODUCTS)
      setData(responses.data.data)
      console.log(responses.data.data)
    }
    getProducts()
  }, [])
  return (
    <div className="grid h-full w-full grid-cols-4 items-center justify-center gap-3">
      {productsData.map((item, index) => (
        <ProductCard image={item.image} productUrl={item.url} key={index} />
        // <h1 key={index}>{item.name}</h1>
      ))}
    </div>
  )
}

export default ProductCatalog
