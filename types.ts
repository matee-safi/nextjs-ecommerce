export interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  image: string[];
  details: string;
  price: number;
  sku: string;
  ingredients: string;
  weight: string;
  delivery: string;
  quantity: number;
}
