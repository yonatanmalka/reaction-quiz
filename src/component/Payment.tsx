"use client"
import React, {useEffect, useState} from "react";
import {Img} from "@/utils/Img";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";
import Logo from "../../images/logo.svg";

const list = [
    {
        name: 'Ready to launch step challenge'
    },
    {
        name: 'AI engagement engine'

    },
    {
        name: 'Points unlock real rewards'

    },
    {
        name: 'Admin dashboard & analytics'

    },
    {
        name: 'VIP customer support'

    }
]

interface QuestionProps {
    handleClick: () => void;
    states: any;
    setStates: any;
}

const Payment: React.FC<QuestionProps> = ({handleClick, states, setStates}) => {
    const [clientSecret, setClientSecret] = useState<any>('');
    const [selectedOption, setSelectedOption] = useState("yearly");

    const StartDate = states.create_step_challenge.selectedDate.startDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const timeDifferenceInDays = Math.floor((states.create_step_challenge.selectedDate.endDate - states.create_step_challenge.selectedDate.startDate) / (1000 * 60 * 60 * 24));

    const createPaymentIntent = async () => {
        const response: any = await fetch('/api/createPaymentIntent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: states.admin_detail.email,
                name: `${states.admin_detail.first_Name} ${states.admin_detail.last_Name}`,
            }),
        });
        const {clientSecret, customerId} = await response.json()
        await setStates({...states, 'client_secret': clientSecret, 'customer_id': customerId})
        setClientSecret(clientSecret);
    };

    useEffect(() => {
        if (clientSecret !== '') {
            console.log(states)
            handleClick();
        }
    }, [clientSecret]);

    useEffect(() => {
        let id, type;
        if (selectedOption === 'monthly') {
            id = 'price_1OaKMBFN3wpDa6wtK3j1IIYN';
            type = 'monthly'
        } else if (selectedOption === 'yearly') {
            id = 'price_1OaKNbFN3wpDa6wteX1LXYxm';
            type = 'yearly'
        }
        setStates({...states, 'price_id': id, 'pricing': type});
    }, [selectedOption]);


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
                        className={`paymentCard w-[100%] flex flex-col justify-center ${selectedOption === 'monthly' ? 'selected' : ''}`}
                        onClick={() => setSelectedOption('monthly')}
                    >
                        <div className='flex flex-row items-center  justify-between px-[10px] w-[100%] '>
                            <div className='flex flex-row gap-[8px]  justify-center items-center'>
                                <div>
                                    <Img
                                        src={selectedOption === 'monthly' ? '/images/checkbox.png' : '/images/circle.png'}
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
                            <div className="relative z-0 min-w-[145px] flex items-center justify-end">
                                <Img src='/images/rectangle.png' alt='logo'
                                     className='md:w-[140px] w-[120px] h-[60px] ml-[5px] md:h-[65px]'/>
                                <div
                                    className='absolute top-0 left-0 mt-[5px] flex flex-col items-end w-full pr-[10px]'>
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
                        className={`w-full text-[#fff] flex justify-center items-center mt-[15px] h-[20px] rounded-tl-[10px] rounded-tr-[10px] ${selectedOption === 'yearly' ? 'bg-[#F9B22D]' : 'bg-[#979797]'}`}>
                        Most Popular
                    </div>

                    <div
                        className={`paymentCard2 flex flex-col w-[100%] justify-center ${selectedOption === 'yearly' ? 'selected' : ''}`}
                        onClick={() => setSelectedOption('yearly')}
                    >
                        <div className='flex flex-row items-center px-[10px] w-[100%]   justify-between'>
                            <div className='flex flex-row gap-[8px]  justify-center items-center'>
                                <div>
                                    <Img
                                        src={selectedOption === 'yearly' ? '/images/checkbox.png' : '/images/circle.png'}
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
                            <div className="relative z-0 min-w-[145px] flex items-center justify-end">
                                <Img src='/images/rectangle.png' alt='logo'
                                     className='md:w-[140px] w-[120px] h-[60px] ml-[5px] md:h-[65px]'/>
                                <div
                                    className='absolute top-0 left-0 mt-[5px] flex flex-col items-end w-full pr-[10px]'>
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
                    By clicking <span className='text-black font-bold'>GET MY CHALLENGE, </span>you agree to the
                    following terms: Your introductory offer is valid for the specified period. If you do not cancel
                    before the end of the then-current period, you will be charged the full price of our monthly
                    subscription plan based on your user count each month until you cancel your subscription. Learn more
                    about our pricing, refund, and cancellation policies in the Subscription Terms
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
                                className="md:text-[14px] w-[275px] md:w-[330px] text-[12px]  ml-[15px]">
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
