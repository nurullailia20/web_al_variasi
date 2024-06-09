import React from "react";
import gambar from "../../../public/assets/gambar1.jpg";
import ProductCard from "./ProductCard";

const productsData = [
  {
    image: gambar,
    url: "/product1",
  },
  {
    image: gambar,
    url: "/product2",
  },
  {
    image: gambar,
    url: "/product3",
  },
  {
    image: gambar,
    url: "/product4",
  },
];

function ProductCatalog() {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-3 items-center justify-center">
      {productsData.map((item, index) => (
        <ProductCard image={item.image} productUrl={item.url} />
      ))}
    </div>
  );
}

export default ProductCatalog;
