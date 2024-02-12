import Stripe from 'stripe';

export const stripe_secret_key = process.env.STRIPE_SECRET_KEY as string;
export const stripe_public_key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string;
export const ONE_WEEK_TRIAL: string = 'price_1OhrnhFN3wpDa6wtP1F4tzf7'
export const ONE_WEEK_MONTH_SUBSCRIPTION: string = 'price_1OhrnGFN3wpDa6wt6ATEB1Wz'
export const FOUR_WEEK_TRIAL: string = 'price_1ObNYJFN3wpDa6wtBuB7vvTC'
export const FOUR_WEEK_MONTH_SUBSCRIPTION: string = 'price_1ObNYJFN3wpDa6wtPk7wvNnQ'
// export const stripe_product_1_key = process.env.STRIPE_PRODUCT_1_KEY as string;
// export const stripe_product_1_trail_key = process.env.STRIPE_PRODUCT_1_TRAIL_KEY as string;
// export const stripe_product_2_key = process.env.STRIPE_PRODUCT_2_KEY as string;
// export const stripe_product_2_trail_key = process.env.STRIPE_PRODUCT_2_TRIAL_KEY as string;

const stripe = new Stripe(stripe_secret_key, {
    apiVersion: "2023-10-16"
});

export default stripe;
