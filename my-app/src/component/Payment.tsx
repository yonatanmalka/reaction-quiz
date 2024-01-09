"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
import Slider from "@/component/Slider";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState("monthly");

    const handleOptionSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const isMonthlySelected = selectedOption === "monthly";
    const isYearlySelected = selectedOption === "yearly";

    return (
        <>
            <Timer/>
            <div className="md:px-[40px] pb-[50px] px-[20px]">

                <div className="flex flex-col justify-center  items-center">
                    <div>
                        <Img src='/images/logo.png' alt='logo' className='w-[100px] h-[70px]'/>
                    </div>
                    <div className='md:text-[28px] font-semibold text-[23px] mt-[10px]'>
                        Your Challenge Is Ready!
                    </div>
                </div>
                <div className='flex flex-row px-[5px]  border-b-2 pb-[10px] mt-[18px] md:px-[15px] justify-between '>
                    <div className='flex-col flex'>
                        <div className='flex justify-center items-center gap-[8px] flex-row'>
                            <div className=''>
                                <Img src='/images/clock.png' alt='logo' className='w-[34px] h-[34px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[14px] font-normal text-[#979797]'>
                                    Start date
                                </div>
                                <div className='text-[12px] font-normal text-[#343434]'>
                                    01 July 2024
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[15px] items-center gap-[8px] flex-row'>
                            <div className=''>
                                <Img src='/images/arrow.png' alt='logo' className='w-[34px] h-[34px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[14px] font-normal text-[#979797]'>
                                    Duration
                                </div>
                                <div className='text-[12px] font-normal text-[#343434]'>
                                    01 July 2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Img src='/images/girl.png' alt='logo' className='w-[94px] h-[134px]'/>
                    </div>
                </div>
                <div className='text-[18] mt-[10px] font-semibold'>
                    Engagement prediction
                </div>
                <div>
                    <Img src='/images/graph.png' alt='logo' className='w-full h-full'/>
                </div>
                <div className={`paymentCard flex justify-center items-center ${isMonthlySelected ? 'selected' : ''}`}
                     onClick={() => handleOptionSelect('monthly')}>
                    <div className='flex flex-row items-center   justify-between'>
                        <div className='flex flex-row gap-[8px]  justify-center items-center'>
                            <div>
                                <Img src={isMonthlySelected ? '/images/checkbox.png' : '/images/circle.png'}
                                     alt='logo' className='w-[25px] h-[25px]'/>
                            </div>
                            <div className="flex flex-col ">
                                <div className="text-[14px] font-semibold">
                                    Monthly
                                </div>
                                <div className="md:text-[12px] line text-[9px] text-[#979797] font-semibold">
                                    $5.99 per user per month
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Img src='/images/rectangle.png' alt='logo'
                                 className='md:w-[150px] w-[140px] h-[80px] ml-[5px] md:h-[70px]'/>
                            <div className='absolute top-0  left-[55px] mt-[5px]'>
                                <div className='md:text-[12px] text-[8px] font-semibold '>
                                    Try first month
                                </div>
                                <div className="flex flex-row ml-[15px] ">
                                    <div className="text-[10px] mt-[5px] font-bold">
                                        $
                                    </div>
                                    <div className="text-[22px] ml-[3px] font-bold">
                                        1
                                    </div>

                                    <div className="flex flex-col ml-[3px] text-[10px] font-semibold">
                                        <div>
                                            99
                                        </div>
                                        <div>
                                            per user
                                        </div>
                                        <div>
                                            per month
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`w-full text-[#fff] flex justify-center items-center mt-[15px] h-[20px] rounded-tl-[10px] rounded-tr-[10px] ${isYearlySelected ? 'bg-[#F9B22D]' : 'bg-[#979797]'}`}>
                    Most Popular
                </div>

                <div className={`paymentCard2 flex justify-center items-center ${isYearlySelected ? 'selected' : ''}`}
                     onClick={() => handleOptionSelect('yearly')}>
                    <div className='flex flex-row items-center   justify-between'>
                        <div className='flex flex-row gap-[8px]  justify-center items-center'>
                            <div>
                                <Img src={isYearlySelected ? '/images/checkbox.png' : '/images/circle.png'} alt='logo'
                                     className='w-[25px] h-[25px]'/>
                            </div>
                            <div className="flex flex-col ">
                                <div className="text-[14px] font-semibold">
                                    Yearly
                                </div>
                                <div className="md:text-[12px] line text-[9px] text-[#979797] font-semibold">
                                    $5.99 per user per month
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Img src='/images/rectangle.png' alt='logo'
                                 className='md:w-[150px] w-[140px] h-[80px] ml-[5px] md:h-[70px]'/>
                            <div className='absolute top-0  left-[55px] mt-[5px]'>
                                <div className='md:text-[12px] text-[8px] font-semibold '>
                                    Try first month
                                </div>
                                <div className="flex flex-row ml-[15px] ">
                                    <div className="text-[10px] mt-[5px] font-bold">
                                        $
                                    </div>
                                    <div className="text-[22px] ml-[3px] font-bold">
                                        1
                                    </div>

                                    <div className="flex flex-col ml-[3px] text-[10px] font-semibold">
                                        <div>
                                            99
                                        </div>
                                        <div>
                                            per user
                                        </div>
                                        <div>
                                            per month
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-full ">
                    <button className="ButtonContainer">GET MY CHALLENGE</button>
                </div>
                <div className='text-center text-[10px] mt-[20px] text-[#979797]'>
                    By clicking <span className='text-black font-bold'>GET MY CHALLENGE, </span>I agree to pay $0.99 per
                    user per month and that if I do not cancel before
                    the end of the first month plan, it will convert to a monthly subscription plan and Reaction will
                    automatically charge my payment method the regular price of $5.99 per user every month thereafter
                    until
                    I cancel. I can cancel online by visiting the subscription page on Reaction’s website to avoid being
                    charged the next next billing cycle.
                </div>
                <div className='md:text-[28px]  text-center font-semibold text-[23px] mt-[10px]'>
                    What you get
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <div className='flex flex-row justify-center items-center'>
                        <div>
                            <Img src='/images/Ok.png' alt='logo'
                                 className='w-[40px] h-[40px] '/>
                        </div>
                        <div className="md:text-[14px]  text-[12px]  ml-[15px] font-semibold">
                            Step challenge
                        </div>
                    </div>
                    <div className='flex mt-[15px] flex-row justify-center items-center'>
                        <div>
                            <Img src='/images/Ok.png' alt='logo'
                                 className='w-[40px] h-[40px] '/>
                        </div>
                        <div className="md:text-[14px]  text-[12px] ml-[15px] font-semibold">
                            AI engagement engine
                        </div>
                    </div>
                    <div className='flex mt-[15px] flex-row justify-center items-center'>
                        <div>
                            <Img src='/images/Ok.png' alt='logo'
                                 className='w-[40px] h-[40px] '/>
                        </div>
                        <div className="md:text-[14px]  text-[12px]   ml-[15px] font-semibold">
                            Admin dashboard
                        </div>
                    </div>
                    <div className='flex mt-[15px] flex-row justify-center items-center'>
                        <div>
                            <Img src='/images/Ok.png' alt='logo'
                                 className='w-[40px] h-[40px] '/>
                        </div>
                        <div className="md:text-[14px]  text-[12px]   ml-[15px] font-semibold">
                            Personal account manager to answer questions
                        </div>
                    </div>

                    <div className='flex mt-[15px] flex-row justify-center items-center'>
                        <div>
                            <Img src='/images/Ok.png' alt='logo'
                                 className='w-[40px] h-[40px] '/>
                        </div>
                        <div className="md:text-[14px]  text-[12px]   ml-[15px] font-semibold">
                            Marketing materials
                        </div>
                    </div>
                </div>
                <SliderComp/>
            </div>
        </>
    );
};

export default Payment;
