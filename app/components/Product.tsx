import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";
import Image from "next/image";

interface ProductType {
  image: string[];
  name: string;
  slug: { current: string };
  price: number;
}

interface Props {
  product: ProductType;
}

export default function Product({ product }: Props) {
  const { image, name, slug, price } = product;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <figure className="fliptile">
            <Image
              src={urlFor(image && image[0]).url()}
              width={250}
              height={250}
              className="product-image"
              alt={name}
            />
            <figcaption>
              <p className="product-name">{name}</p>
            </figcaption>
          </figure>
          <p className="product-name">{name}</p>
          <p className="product-price">
            $
            {price.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </Link>
    </div>
  );
}
