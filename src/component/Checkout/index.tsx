import React, {FC, useContext, useEffect} from 'react';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/component/Checkout/Form";
import { loadStripe } from "@stripe/stripe-js";
import { stripe_public_key } from "@/utils/stripe";
import { AppContext } from '@/utils/ContextProvider';

const Checkout = () => {
    const stripePromise = loadStripe(stripe_public_key);
    const state = useContext(AppContext)
    const clientSecret = state.client_secret;
    useEffect(() => {
        console.log(state)
    }, []);

    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            { clientSecret ? <CheckoutForm/> : 'loading...' }
        </Elements>
    )
};

export default Checkout;
