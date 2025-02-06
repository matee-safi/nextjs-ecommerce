import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key. (Make sure it's defined in your environment)
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);

// Define the expected structure for each item in the request body.
interface CartItem {
  name: string;
  image: { asset: { _ref: string } }[];
  price: number;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    // Cast the parsed JSON to an array of CartItem objects.
    const items = (await req.json()) as CartItem[];

    const params: Stripe.Checkout.SessionCreateParams = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        {
          shipping_rate: process.env.NEXT_PUBLIC_STRIPE_SHIPPING_RATE,
        },
      ],
      line_items: items.map((item) => {
        const imgRef = item.image[0].asset._ref;
        const newImage = imgRef
          .replace("image-", "https://cdn.sanity.io/images/g6xvtbtr/")
          .replace("-webp", ".webp");

        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.nextUrl.origin}/success`,
      cancel_url: `${req.nextUrl.origin}/canceled`,
    };

    // Create Checkout Session from the params.
    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session);
  } catch (err: unknown) {
    // Handle errors by checking if the error is an instance of Error.
    if (err instanceof Error) {
      return new NextResponse(err.message, { status: 500 });
    }
    return new NextResponse("Internal server error", { status: 500 });
  }
}
