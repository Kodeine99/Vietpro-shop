import React from "react";
import ProductItem from "./ProductItem";
export default function ProductList({ data = [] }) {
  return (
    <div className="product-list card-deck">
      {data.map((item, index) => (
        <ProductItem product={item} key={index}/>
      ))}
    </div>
  );
}
