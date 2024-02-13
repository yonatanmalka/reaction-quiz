import Stripe from 'stripe';

export const stripe_secret_key: string = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string
export const stripe_public_key: string = process.env.NEXT_PUBLIC_KEY as string
export const ONE_WEEK_TRIAL: string = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_1_TRAIL_KEY as string
export const ONE_WEEK_MONTH_SUBSCRIPTION: string = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_1_KEY as string
export const FOUR_WEEK_TRIAL: string = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_2_TRIAL_KEY as string
export const FOUR_WEEK_MONTH_SUBSCRIPTION: string = process.env.NEXT_PUBLIC_STRIPE_PRODUCT_2_KEY as string

const stripe = new Stripe(stripe_secret_key, {
    apiVersion: "2023-10-16"
});

export default stripe;
