import Stripe from 'stripe';

export const stripe_secret_key = process.env.STRIPE_SECRET_KEY as string;
export const stripe_public_key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
export const stripe_product_1_key = process.env.STRIPE_PRODUCT_1_KEY as string;
export const stripe_product_2_key = process.env.STRIPE_PRODUCT_2_KEY as string;

const stripe = new Stripe(stripe_secret_key, {
    apiVersion: "2023-10-16"
});

export default stripe;
