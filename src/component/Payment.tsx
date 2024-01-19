"use client"
import React, {useEffect, useState} from "react";
import {Img} from "@/utils/Img";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";
import Logo from "../../images/logo.svg";
import {loadStripe} from "@stripe/stripe-js";
import {stripe_public_key} from "@/utils/stripe";

const months = ['Week1', "Week2", "Week3", "Week4"];

const freq1 = {
    label: 'Week',
    data: ['10', '80', '60', '120'],
    borderColor: '#343434',
    backgroundColor: '#dadada',
    fill: false,
}
const list = [
    {
        name: 'Step challenge '
    },
    {
        name: 'AI engagement engine'

    },
    {
        name: 'Admin dashboard'

    },
    {
        name: 'Personal account manager to answer questions and support your program'

    },
    {
        name: 'Marketing materials '

    }
]

interface QuestionProps {
    handleClick: () => void;
    setData: any;
    setPriceId: any;
    states: any;
    setStates: any;
}

const Payment: React.FC<QuestionProps> = ({handleClick, setData, setPriceId, states, setStates}) => {
    const stripePromise = loadStripe(stripe_public_key);
    const [clientSecret, setClientSecret] = useState<any>('');
    const [selectedOption, setSelectedOption] = useState("yearly");

    const handleOptionSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
        setData(option);
    };
    const StartDate = states.create_step_challenge.selectedDate.startDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const timeDifferenceInDays = Math.floor((states.create_step_challenge.selectedDate.endDate - states.create_step_challenge.selectedDate.startDate) / (1000 * 60 * 60 * 24));

    const isMonthlySelected = selectedOption === "monthly";
    const isYearlySelected = selectedOption === "yearly";

    useEffect(() => {
        setPriceId(selectedOption === 'yearly' ? 'price_1OaKMBFN3wpDa6wtK3j1IIYN' : 'price_1OaKNbFN3wpDa6wteX1LXYxm')
    }, [selectedOption]);

    const createPaymentIntent = async () => {
        const response: any = await fetch('/api/createPaymentIntent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'priceId': states.pricing === 'monthly' ? 'price_1OaKMBFN3wpDa6wtK3j1IIYN' : 'price_1OaKNbFN3wpDa6wteX1LXYxm'}),
        });
        const {clientSecret} = await response.json()
        await setStates({...states, 'client_secret': clientSecret})
        setClientSecret(clientSecret);
    };

    useEffect(() => {
        if (clientSecret !== '')
            handleClick();
    }, [clientSecret]);


    return (
        <div className="w-[100%] h-[100%]">
            <div className="fixed z-10 md:w-[400px] w-[425px]">
                <Timer/>
            </div>
            <div>
                <div className="flex flex-col justify-center  items-center">
                    <div>
                        <Img src={Logo} alt='logo' className='w-[100px] h-[70px] mt-[40px]'/>
                    </div>
                    <div className='md:text-[26px] font-semibold text-[22px] mt-[10px]'>
                        Your Challenge Is Ready!
                    </div>
                </div>
                <div className='flex flex-row px-[40px] my-[10px] md:px-[40px] justify-between items-center '>
                    <div className='flex-col flex items-start'>
                        <div className='flex justify-center items-center gap-[8px] flex-row'>
                            <div
                                className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/clock.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Start date
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    {StartDate}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[15px] items-center gap-[8px] flex-row'>
                            <div
                                className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/arrow.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Duration
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    {`${timeDifferenceInDays} days`}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Img src='/images/girl.png' alt='logo' className='w-[84px] h-[134px]'/>
                    </div>
                </div>
                <div className="bg-[#979797] h-[1px] mx-[40px] flex-1"/>
                <div className='text-[14px] text-[#000] px-[40px] mt-[10px] font-semibold'>
                    Engagement prediction
                </div>
                <div className="my-[10px] mx-[30px]">
                    <Img src="/chart.png" alt="Engagement Prediction Chart" className="w-full"/>
                </div>
                <div className="px-[20px] mt-[30px]">
                    <div
                        className={`paymentCard w-[100%] flex flex-col justify-center ${isMonthlySelected ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('monthly')}>
                        <div className='flex flex-row items-center  justify-between px-[10px] w-[100%] '>
                            <div className='flex flex-row gap-[8px]  justify-center items-center'>
                                <div>
                                    <Img src={isMonthlySelected ? '/images/checkbox.png' : '/images/circle.png'}
                                         alt='logo' className='w-[20px] h-[20px]'/>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="text-[12px] font-semibold">
                                        Step challenge
                                    </div>
                                    <div className="md:text-[12px] text-[12px] text-[#979797] font-semibold">
                                        First 5 seats
                                    </div>
                                    <div className="md:text-[12px] line text-[12px] text-[#979797] font-semibold">
                                        $7 seat/month
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-0">
                                <Img src='/images/rectangle.png' alt='logo'
                                     className='md:w-[140px] w-[120px] h-[60px] ml-[5px] md:h-[65px]'/>
                                <div className='absolute top-0  left-[55px] mt-[5px]'>
                                    <div className='md:text-[10px] text-[8px] font-semibold '>
                                        Try first month
                                    </div>
                                    <div className="flex flex-row md:ml-[15px] ">
                                        <div className="text-[8px] mt-[5px] font-bold">
                                            $
                                        </div>
                                        <div className="text-[20px] ml-[3px] font-bold">
                                            1
                                        </div>

                                        <div className="flex flex-col ml-[3px] text-[8px] font-semibold">
                                            <div>
                                                99
                                            </div>
                                            <div>
                                                per seat
                                            </div>
                                            <div>
                                                per week
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:text-[10px] text-[8px] pl-[37px] text-[#979797] font-light">
                            $35 for 5 seats billed monthly after the 1st week
                        </div>
                    </div>
                    <div
                        className={`w-full text-[#fff] flex justify-center items-center mt-[15px] h-[20px] rounded-tl-[10px] rounded-tr-[10px] ${isYearlySelected ? 'bg-[#F9B22D]' : 'bg-[#979797]'}`}>
                        Most Popular
                    </div>

                    <div
                        className={`paymentCard2 flex flex-col w-[100%] justify-center ${isYearlySelected ? 'selected' : ''}`}
                        onClick={() => handleOptionSelect('yearly')}>
                        <div className='flex flex-row items-center px-[10px] w-[100%]   justify-between'>
                            <div className='flex flex-row gap-[8px]  justify-center items-center'>
                                <div>
                                    <Img src={isYearlySelected ? '/images/checkbox.png' : '/images/circle.png'}
                                         alt='logo' className='w-[20px] h-[20px]'/>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="text-[12px] font-semibold">
                                        Step challenge + Earn rewards
                                    </div>
                                    <div className="text-[12px] text-[#979797] font-semibold">
                                        First 5 seats
                                    </div>
                                    <div className="text-[12px] line  text-[#979797] font-semibold">
                                        $12 seat/month
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <Img src='/images/rectangle.png' alt='logo'
                                     className='md:w-[140px] w-[120px] h-[60px] ml-[5px] md:h-[65px]'/>
                                <div className='absolute top-0  left-[55px] mt-[5px]'>
                                    <div className='md:text-[10px] text-[8px] font-semibold '>
                                        Try first month
                                    </div>
                                    <div className="flex flex-row md:ml-[15px] ">
                                        <div className="text-[8px] mt-[5px] font-bold">
                                            $
                                        </div>
                                        <div className="text-[20px] ml-[3px] font-bold">
                                            0
                                        </div>

                                        <div className="flex flex-col ml-[3px] text-[8px] font-semibold">
                                            <div>
                                                99
                                            </div>
                                            <div>
                                                per seat
                                            </div>
                                            <div>
                                                per week
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:text-[10px] text-[8px] pl-[37px] text-[#979797] font-light">
                            $35 for 5 seats billed monthly after the 1st week
                        </div>
                    </div>
                </div>
                <div className="px-[20px] mt-[20px] ">
                    <button onClick={createPaymentIntent}
                            className="uppercase flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[28px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]">GET
                        MY CHALLENGE
                    </button>
                </div>
                <div className='px-[20px] text-center text-[10px] mt-[20px] text-[#979797]'>
                    By clicking <span className='text-black font-bold'>GET MY CHALLENGE, </span>I agree to pay $0.99 per
                    user per month and that if I do not cancel before
                    the end of the first month plan, it will convert to a monthly subscription plan and Reaction will
                    automatically charge my payment method the regular price of $5.99 per user every month thereafter
                    until
                    I cancel. I can cancel online by visiting the subscription page on Reaction’s website to avoid being
                    charged the next next billing cycle.
                </div>
                <div className='md:text-[26px]  text-center font-semibold text-[22px] mt-[15px] pb-[10px]'>
                    What you get
                </div>
                <div className='flex flex-col  gap-[10px] px-[20px] justify-start items-start'>
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-row justify-start items-center'>
                            <div>
                                <Img src='/images/Ok.png' alt='logo'
                                     className='w-[30px] h-[30px] '/>
                            </div>
                            <div
                                className="md:text-[14px] w-[275px] md:w-[330px]  text-[12px]  ml-[15px] font-semibold">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
                <SliderComp/>
            </div>
        </div>
    );
};

export default Payment;
