import React, {FC, useEffect, useState} from 'react';
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";

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

const CheckoutForm: FC<CheckoutFormInterface> = ({states, clientSecret, click: handleClick}) => {
    const {id: priceId, customer_id: customerId} = states;
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubscribe = async () => {
        setLoading(true);
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            console.log('Stripe.js has not loaded yet.');
            return;
        }

        // Confirm the card setup using the PaymentElement.
        const result = await stripe.confirmSetup({
            elements,
            confirmParams: {
                return_url: 'http://localhost:3000/success',
            },
        });

        if (result.error) {
            console.log(result.error.message);
        } else {
            subscribe();
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
            console.log('Subscription and Customer created:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        console.log(states)
    }, [states]);

    return <div className="flex flex-col font-primary">
        {/*<div className='md:text-[26px] text-center font-semibold text-[22px] mt-[10px]'>*/}
        {/*    Select payment method*/}
        {/*</div>*/}
        {/*<div className="w-full flex flex-row mt-[25px]">*/}
        {/*    <div className="p-2 w-[50%]">*/}
        {/*        <div*/}
        {/*            onClick={() => setActivePaymentType('credit_card')}*/}
        {/*            className={`flex flex-col items-center w-full rounded py-[15px] border-2 cursor-pointer bg-[#EFF3F6] transition-all ${activePaymentType === 'credit_card' ? 'border-[#5753FE]' : 'border-[#E1E2E6]'}`}*/}
        {/*        >*/}
        {/*            <div className="p-1 text-[14px] text-[#252B2F] font-bold text-center">*/}
        {/*                Credit card*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex justify-center">*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/visa.svg" alt="Visa" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/mastercard.svg" alt="Mastercard" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/amex.svg" alt="Amex" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/maestro.svg" alt="Maestro" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="p-2 w-[50%]">*/}
        {/*        <div*/}
        {/*            onClick={() => setActivePaymentType('paypal')}*/}
        {/*            className={`flex flex-col items-center w-full rounded py-[15px] border-2 cursor-pointer bg-[#EFF3F6] transition-all ${activePaymentType === 'paypal' ? 'border-[#5753FE]' : 'border-[#E1E2E6]'}`}*/}
        {/*        >*/}
        {/*            <div className="p-1 text-[14px] text-[#252B2F] font-bold text-center">*/}
        {/*                <span style={{color: 'rgba(0, 69, 124, 0.50)'}}>Pay</span><span*/}
        {/*                style={{color: 'rgba(0, 121, 192, 0.50)'}}>Pal</span>*/}
        {/*            </div>*/}
        {/*            <div className="w-full flex justify-center">*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/paypal.svg" alt="PayPal" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/google_pay.svg" alt="Google Pay" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*                <div className="p-1">*/}
        {/*                    <Img src="/icons/apple_pay.svg" alt="Apple Pay" className="w-[24px]"/>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
            <div className="flex items-center text-[#979797]">
                <div className="flex-1 p-1">
                    AI team building & wellbeing plan
                </div>
                <div className="p-1">
                    $3.99
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 text-[#979797] p-1">
                    with customize challenge
                </div>
                <div className="p-1 text-[#C73D23] font-semibold">
                    $20
                </div>
            </div>
        </div>
        <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
            <div className="flex items-center text-[#000]  font-semibold">
                <div className="flex-1 p-1">
                    Total
                </div>
                <div className="p-1">
                    $0.99
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 text-[#979797] p-1">
                </div>
                <div className="p-1 text-[#C73D23] font-semibold">
                    You just saved $50 (70% off)
                </div>
            </div>
        </div>
        <div className="w-full pt-[25px]">
            {
                clientSecret ? <PaymentElement/> : ''
            }
        </div>
        <div className="w-full pt-[25px]">
            <button
                onClick={handleSubscribe}
                disabled={loading}
                className="uppercase  text-[#000] py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            >
                SUBSCRIBE
            </button>
        </div>
    </div>
};

export default CheckoutForm;

