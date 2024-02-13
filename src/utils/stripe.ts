import Stripe from 'stripe';

export const stripe_secret_key = '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'
export const stripe_public_key = 'pk_live_6QOucH11OV7Y8ruwa1pWhc3E'
export const ONE_WEEK_TRIAL: string = 'price_1OhrnhFN3wpDa6wtP1F4tzf7'
export const ONE_WEEK_MONTH_SUBSCRIPTION: string = 'price_1OhrnGFN3wpDa6wt6ATEB1Wz'
export const FOUR_WEEK_TRIAL: string = 'price_1ObNYJFN3wpDa6wtBuB7vvTC'
export const FOUR_WEEK_MONTH_SUBSCRIPTION: string = 'price_1ObNYJFN3wpDa6wtPk7wvNnQ'

const stripe = new Stripe(stripe_secret_key, {
    apiVersion: "2023-10-16"
});

export default stripe;
