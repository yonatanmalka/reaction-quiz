"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
import Slider from "@/component/Slider";
import SliderComp from "@/component/Slider";
import Switch from "react-switch";
import Timer from "@/component/Timer";

const PaymentForm = () => {
    const [selectedOption, setSelectedOption] = useState("monthly");
    const [checked, setChecked] = useState(false);

    const handleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setChecked(checked);
    };
    const handleOptionSelect = (option: React.SetStateAction<string>) => {
        setSelectedOption(option);
    };

    const isMonthlySelected = selectedOption === "monthly";
    const isYearlySelected = selectedOption === "yearly";

    // @ts-ignore
    return (<>
            <Timer/>
            <div className="md:px-[40px] pb-[50px] px-[20px]">


                <div className="flex flex-col justify-center  items-center">
                    <div>
                        <Img src='/images/logo.png' alt='logo' className='w-[100px] mt-[5px] h-[70px]'/>
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
                        <div className='flex justify-start mt-[15px] items-center gap-[8px] flex-row'>
                            <div className=''>
                                <Img src='/images/arrow.png' alt='logo' className='w-[34px] h-[34px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[14px] font-normal text-[#979797]'>
                                    Duration
                                </div>
                                <div className='text-[12px] font-normal text-[#343434]'>
                                    31 Days
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
                <div className='text-[22] text-[#979797]  text-center mt-[10px] font-semibold'>
                    Subscription starts at <span className='text-black font-bold'>$4.99</span> per user per month.
                    Cancel
                    anytime
                </div>
                <div
                    className="w-full h-[60px]  px-[20px] flex  flex-row justify-between items-center mt-[25px] iosCard">
                    <div className="text-[20px] font-normal text-[#343434]">
                        Unlock 7 days free trial
                    </div>
                    <div>
                        <label>
                            {/*<Switch*/}
                            {/*    onChange={handleChange}*/}
                            {/*    checked={checked}*/}
                            {/*    onColor="#F9B22D"*/}
                            {/*    onHandleColor="#ffff"*/}
                            {/*    handleDiameter={20}*/}
                            {/*    uncheckedIcon={false}*/}
                            {/*    checkedIcon={false}*/}
                            {/*    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"*/}
                            {/*    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"*/}
                            {/*    height={22}*/}
                            {/*    width={38}*/}
                            {/*    className="react-switch"*/}
                            {/*/>*/}
                        </label>
                    </div>
                </div>
                <div className="w-full ">
                    <button className="ButtonContainer">SUBSCRIBE NOW</button>
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

export default PaymentForm;
