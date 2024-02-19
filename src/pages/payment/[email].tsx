import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { IStates } from '@/types/states.type'
import { AppContext } from '@/utils/ContextProvider';
import { FOUR_WEEK_MONTH_SUBSCRIPTION, ONE_WEEK_MONTH_SUBSCRIPTION } from "@/utils/stripe";
import { Img } from '@/utils/Img'
import Timer from '@/component/Timer'
import SliderComp from "@/component/Slider";
import UserInfo from '../../component/Payments/UserInfo';
import Advanteges from '../../component/Payments/Advanteges';
import PaymentCard from '../../component/Payments/PaymentCard';
import styles from './payment.module.css'
import 'tailwindcss/tailwind.css';

export const getServerSideProps = (async (context) => {

  const email = context.query.email

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getUserData`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    }),
  })

  const data = await response.json()

  return { props: { ...data.customer } }
}) satisfies GetServerSideProps<{ data: IStates }>

export default function Payment({ attributes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const state = useContext(AppContext)

  const [clientSecret, setClientSecret] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>("yearly");

  useEffect(() => {
    let id, type;
    if (selectedOption === 'monthly') {
        type = 'monthly'
        id = ONE_WEEK_MONTH_SUBSCRIPTION
    } else if (selectedOption === 'yearly') {
        type = 'yearly'
        id = FOUR_WEEK_MONTH_SUBSCRIPTION
    }
    if (id && type) {
      state.price_id = id
      state.pricing = type
    }
  }, [selectedOption]);

  useEffect(() => {
    if (clientSecret !== '') {
      router.push(`${process.env.NEXT_PUBLIC_URL}/checkout`)
    }
  }, [clientSecret]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('hasVisited');
    }
}, []);

  const createPaymentIntent = async () => {
    const response: any = await fetch('/api/createPaymentIntent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: attributes.email,
            name: `${attributes.firstName} ${attributes.lastName}`,
        }),
    });
    const { clientSecret, customerId } = await response.json()
    state.client_secret = clientSecret
    state.customer_id = customerId
    state.admin_detail.email = attributes.email
    setClientSecret(clientSecret);
  };

  return (
    <main className="flex justify-center items-center">
      <div className={`md:w-[400px] w-[425px] z-[20] relative bg-white 'p-0' overflow-x-hidden overflow-y-scroll sm:overflow-y-hidden`}>
        <div className="w-[100%] h-[100%]">
          <div className="fixed top-0 z-10 md:w-[400px] w-[425px]">
            <Timer/>
          </div>
          <div>
            <div className="flex flex-col justify-center  items-center">
              <div className='md:text-[26px] font-semibold text-[22px] mt-[80px]'>Your Challenge Is Ready!</div>
            </div>
              <UserInfo attributes={attributes}/>
              <div className="bg-[#979797] h-[1px] mx-[40px] flex-1"/>
              <div className='text-[14px] text-[#000] px-[40px] mt-[10px] font-semibold'>Engagement prediction</div>
              <div className="my-[10px] mx-[30px]">
                <Img src="/chart.png" alt="Engagement Prediction Chart" className="w-full"/>
              </div>
              <div className="px-[20px] mt-[30px]">
                <div
                  className={`${styles.paymentCard} flex flex-col w-[100%] justify-center ${selectedOption === 'monthly' ? styles.selected : ''}`}
                  onClick={() => setSelectedOption('monthly')}
                >
                  <PaymentCard
                    duration={'monthly'}
                    selectedOption={selectedOption === 'monthly'}
                    trial_discount={attributes.trial_discount}
                  />
                </div>
                <div className={`w-full text-[#fff] flex justify-center text-[14px] py-3 font-medium items-center mt-[15px] h-[20px] rounded-tl-[10px] rounded-tr-[10px] ${selectedOption === 'monthly' ? 'bg-[#979797]' : 'bg-[#F9B22D]'}`}>
                  Most Popular
                </div>
                <div
                  className={`${styles.paymentCard2} flex flex-col w-[100%] justify-center ${selectedOption === 'yearly' ? styles.selected : ''}`}
                  onClick={() => setSelectedOption('yearly')}
                >
                  <PaymentCard
                    duration={'yearly'}
                    selectedOption={selectedOption === 'yearly'}
                    trial_discount={attributes.trial_discount}
                  />
                </div>
              </div>
              <div className="px-[20px] mt-[20px]">
                <button
                  onClick={createPaymentIntent}
                  className="uppercase flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[28px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]"
                >
                  GET MY CHALLENGE
                </button>
              </div>
              <div className='px-[20px] text-center text-[10px] mt-[20px] text-[#979797]'>
                By clicking <span className='text-black font-bold'>GET MY CHALLENGE, </span>you agree to the
                following terms: Your introductory offer is valid for the specified period. If you do not cancel
                before the end of the then-current period, you will be charged the full price of our monthly
                subscription plan based on your user count each month until you cancel your subscription. Learn more
                about our pricing, refund, and cancellation policies in the Subscription Terms
              </div>
              <Advanteges/>
              <SliderComp/>
          </div>
      </div>
    </div>
  </main>
  )
}
