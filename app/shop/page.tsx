import React from "react";
import { client } from "@/lib/client";
import Product from "../components/Product";
import { Product as ProductType } from "@/types";

export default async function Shop() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return (
    <div>
      <div className="products-heading">
        <h2>Shop</h2>
        <p>Browse for products</p>
      </div>
      <div className="products-container">
        {products?.map((product: ProductType) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
