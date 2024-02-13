import Stripe from 'stripe';

export const stripe_secret_key: string = process.env.SECRET_KEY as string
export const stripe_public_key: string = process.env.PUBLIC_KEY as string
export const ONE_WEEK_TRIAL: string = process.env.TRIAL_ONE_WEEK as string
export const ONE_WEEK_MONTH_SUBSCRIPTION: string = process.env.ONE_WEEK as string
export const FOUR_WEEK_TRIAL: string = process.env.TRIAL_FOUR_WEEK as string
export const FOUR_WEEK_MONTH_SUBSCRIPTION: string = process.env.FOUR_WEEK as string

const stripe = new Stripe(stripe_secret_key, {
    apiVersion: "2023-10-16"
});

export default stripe;
