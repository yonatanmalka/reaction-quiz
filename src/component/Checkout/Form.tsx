import React, { useContext, useEffect, useState } from 'react';
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { ClipLoader } from "react-spinners";
import { AppContext } from '@/utils/ContextProvider';

const PRICES = {
    yearly: 60,
    yearlyDiscount: 31,
    monthly: 21,
    monthlyDiscount: 8 ,
    countYearDiscount: () => Math.floor((PRICES.yearlyDiscount * 100)/PRICES.yearly),
    countMothDiscount: () => Math.floor((PRICES.monthlyDiscount * 100)/PRICES.monthly),
}

const CheckoutForm = () => {
    const { state } = useContext(AppContext)
    const { price_id: priceId, customer_id: customerId, client_secret: clientSecret, pricing: type } = state;
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
                return_url: `${process.env.NEXT_PUBLIC_URL}/success`,
            },
        })

        if (result.error) {
            console.log(result.error.message);
        }

        setLoading(false);
    };

    useEffect(() => {
        if (state) {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('customer_id', btoa(customerId));
                localStorage.setItem('price_id', priceId);
                localStorage.setItem('type', type);
                localStorage.setItem('client_secret', clientSecret)
                localStorage.setItem('email', state.admin_detail.email)
            }
        }
    }, [state]);

    return (
        <div className="flex flex-col font-primary min-h-[850px]">
            <h1 className='text-center font-semibold text-[22px] mt-5'>Select payment method</h1>
            <div className="flex justify-between pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
                <div className="flex items-center text-[#979797]">
                    <div className="flex-1 p-1 text-[12px]">
                        <span className="text-[#343434] text-[14px]"> 5 seats X </span>
                        {type === 'yearly' ?  (
                            'Reaction Premium Subscription with the ability to redeem points for rewards') : (
                            'Reaction Basic subscription with all the features needed for a successful step challenge'
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-end ml-2">
                    <div className="text-[#979797]">
                        {type === 'yearly' ? `$${PRICES.yearly}` : `$${PRICES.monthly}`}
                    </div>
                    {state.trial_discount && <div className="text-[#C73D23] font-semibold">
                            {type === 'yearly' ? `-$${PRICES.yearlyDiscount}` : `-$${PRICES.monthlyDiscount}`}
                        </div>
                    }
                </div>
            </div>
            <div className="pt-[25px] pb-[20px] text-[14px] border-b border-b-[#979797]">
                <div className="flex items-center text-[#000]  font-semibold">
                    <div className="flex-1 p-1 text-[20px]">
                        {type === 'yearly' ? '4-Week Plan' : '1-Week Plan'}
                    </div>
                    <div className="p-1">
                        {type === 'yearly' ? (
                            `$${state.trial_discount ? PRICES.yearly - PRICES.yearlyDiscount : PRICES.yearly}`) : (
                            `$${state.trial_discount ? PRICES.monthly - PRICES.monthlyDiscount : PRICES.monthly}`
                        )}
                    </div>
                </div>
                {state.trial_discount && <div className="flex items-center">
                    <div className="flex-1 text-[#979797] p-1">
                    </div>
                    <div className="p-1 text-[#C73D23] font-semibold">
                        You just saved {type === 'yearly' ? `$${PRICES.yearlyDiscount}` : `$${PRICES.monthlyDiscount}`}
                        ({type === 'yearly' ? `${PRICES.countYearDiscount()}%` : `${PRICES.countMothDiscount()}%`} off)
                    </div>
                </div>

                }
            </div>
            <div className="w-full pt-[25px] ">
                { clientSecret ? <PaymentElement/> : '' }
            </div>
            {
                loading && <div className="flex fixed left-0 top-0 bottom-0 right-0 items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.25)' }}>
                    <ClipLoader
                        color={'#F9B400'}
                        loading={loading}
                        size={100}
                    />
                </div>
            }
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
    )
};

export default CheckoutForm;
