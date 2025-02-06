import { client } from "@/lib/client";
import ProductDetails from "../../components/ProductDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return <ProductDetails product={product} products={products} />;
}
