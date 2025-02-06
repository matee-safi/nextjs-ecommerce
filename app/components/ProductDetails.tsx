"use client";

import { useStateContext } from "@/context/StateContext";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Info from "../components/Info";
import { urlFor } from "@/lib/client";
import Product from "../components/Product";
import { Product as ProductType } from "@/types";
import StarRating from "./StarRating";
import Image from "next/image";

interface ProductDetailsProps {
  product: ProductType;
  products: ProductType[];
}

export default function ProductDetails({
  product,
  products,
}: ProductDetailsProps) {
  const { image, name, details, price, sku, ingredients, weight, delivery } =
    product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              width={500}
              height={500}
              alt="image overlay"
              src={urlFor(image && image[index]).url()}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <Image
                width={100}
                height={100}
                alt="other product images"
                key={i}
                src={urlFor(item).url()}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <StarRating />
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">
            $
            {price.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
          per box of 12
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="sku">SKU: {sku}</div>
          <div className="buttons">
            <button
              className="button btn-cart"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              <span>
                <span>Add to My Bag</span>
              </span>
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Info ingredients={ingredients} weight={weight} delivery={delivery} />

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
