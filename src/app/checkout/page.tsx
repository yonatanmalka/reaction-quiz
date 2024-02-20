"use client"

import React, { useContext, useEffect} from 'react';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/component/Checkout/Form";
import { loadStripe } from "@stripe/stripe-js";
import { stripe_public_key } from "@/utils/stripe";
import { AppContext } from '@/utils/ContextProvider';
import 'tailwindcss/tailwind.css';

const Checkout = () => {
    const stripePromise = loadStripe(stripe_public_key);
    const { state } = useContext(AppContext)
    const clientSecret = state.client_secret;
    useEffect(() => {
        console.log(state)
    }, []);

    return (
        <main className="flex justify-center items-center p-4">
            <div className={`md:w-[400px] w-[425px] z-[20] relative bg-white 'p-0' overflow-x-hidden overflow-y-scroll sm:overflow-y-hidden`}>
                <div className="w-[100%] h-[100%]">
                    <Elements stripe={stripePromise} options={{clientSecret}}>
                        { clientSecret ? <CheckoutForm/> : 'loading...' }
                    </Elements>
                </div>
            </div>
        </main>
    )
};

export default Checkout;
