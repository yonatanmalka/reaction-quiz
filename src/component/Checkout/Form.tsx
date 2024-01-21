import React, { FC, useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";

const ELEMENT_STYLES = {
    base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
            color: '#aab7c4',
        },
        padding: '20px 24px',
    },
    invalid: {
        color: '#9e2146',
    },
};

interface CheckoutFormInterface {
    states: any,
    clientSecret: any,
    click: any,
}

const CheckoutForm: FC<CheckoutFormInterface> = ({ states, clientSecret: secret, click: handleClick }) => {
    const { price_id: priceId, customer_id: customerId, client_secret: clientSecret, pricing: type } = states;
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubscribe = async () => {
        setLoading(true);
        if (!stripe || !elements) {
            console.log('Stripe.js has not loaded yet.');
            return;
        }

        // Confirm the card setup using the PaymentElement.
        const result = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: 'https://reaction-omega-ecru.vercel.app/success',
            },
        });

        if (result.error) {
            console.log(result.error.message);
        }
        setLoading(false);
    };

    const subscribe = async () => {
        try {
            const response = await fetch('/api/createSubscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    customerId,
                    priceId
                }),
            });

            const data = await response.json();
            if (response.status === 200) {
                handleSubscribe();
            }
            console.log('Subscription and Customer created:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        console.log(states)
    }, [states]);

    return <div className="flex flex-col font-primary min-h-[850px]">
        <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
            <div className="flex items-center text-[#979797]">
                <div className="flex-1 p-1">
                    <span
                        className="text-[#343434]"
                    >5 seats X </span>{type === 'yearly' ? 'Reaction Premium Subscription' : 'Reaction Basic subscription with all the'}
                </div>
                <div className="p-1">
                    {type === 'yearly' ? '$59.99' : '$35.00'}
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 text-[#979797] p-1">
                    {type === 'yearly' ? 'with the ability to redeem points for rewards' : 'features needed for a successful step challenge'}
                </div>
                <div className="p-1 text-[#C73D23] font-semibold">
                    {type === 'yearly' ? '-$55.00' : '-$25.00'}
                </div>
            </div>
        </div>
        <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
            <div className="flex items-center text-[#000]  font-semibold">
                <div className="flex-1 p-1">
                    Total
                </div>
                <div className="p-1">
                    {type === 'yearly' ? '$4.95' : '$9.95'}
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 text-[#979797] p-1">
                </div>
                <div className="p-1 text-[#C73D23] font-semibold">
                    You just saved {type === 'yearly' ? '$55' : '$25'} ({type === '' ? '90%' : '70%'} off)
                </div>
            </div>
        </div>
        <div className="w-full pt-[25px]">
            {
                clientSecret ? <PaymentElement/> : ''
            }
        </div>
        {
            loading && <div className="flex fixed left-0 top-0 bottom-0 right-0 items-center justify-center z-50"
                            style={{ background: 'rgba(0,0,0,0.25)' }}>
                <ClipLoader color={'#F9B400'} loading={loading} size={100}/>
            </div>
        }
        <div className="w-full pt-[25px]">
            <button
                onClick={subscribe}
                disabled={loading}
                className="uppercase  text-[#000] py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            >
                SUBSCRIBE
            </button>
        </div>
    </div>
};

export default CheckoutForm;

