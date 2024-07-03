// "use server";

// import { connectToDatabase } from "@/utils/mongoDB";
// import Stripe from "stripe";
// import { CartItem } from "../types";

// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
// if (!STRIPE_SECRET_KEY) {
//   throw new Error(
//     "Please define the STRIPE_SECRET_KEY environment variable inside .env.local"
//   );
// }
// const stripe = new Stripe(STRIPE_SECRET_KEY ?? "");

// export const createCheckoutSession = async (items, email: string) => {
//   try {
//     const { db } = await connectToDatabase();

//     // Insert order into database
//     const result = await db.collection("orders").insertOne({
//       user: email,
//       items,
//       createdAt: new Date(),
//     });

//     // Transform cart items to Stripe line items
//     const transformedItems = items.map((item: CartItem) => ({
//       description: item.description,
//       quantity: item.qty,
//       price_data: {
//         currency: "INR",
//         unit_amount: item.price * 100,
//         product_data: {
//           name: item.title,
//           images: [item.image],
//         },
//       },
//     }));

//     // Create Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       shipping_rates: ["shr_1J1z9cSILNiInkjsOUxwYnGT"],
//       shipping_address_collection: {
//         allowed_countries: ["GB", "US", "CA", "IN"],
//       },
//       line_items: transformedItems,
//       mode: "payment",
//       success_url: `${process.env.HOST}/success`,
//       cancel_url: `${process.env.HOST}/cart`,
//       metadata: {
//         id: result.insertedId.toString(),
//       },
//     });

//     return session.id;
//   } catch (err) {
//     console.error("Error creating checkout session:", err);
//     throw new Error("Failed to create checkout session");
//   }
// };
