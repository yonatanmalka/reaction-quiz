"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";
import Logo from "../../images/logo.svg";
import {BarChart} from "@/component/chats";

const months =  ['Week1', "Week2", "Week3", "Week4"];

const freq1 = {
    label: 'Week',
    data: ['10','80','60','120'],
    borderColor: '#343434',
    backgroundColor: '#dadada',
    fill: false,
}

const list = [
    {
        name:'Step challenge '
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
    return (
        <div className="w-[100%] paymentslider">
            <Timer/>
            <div className="">


                <div className="flex flex-col justify-center  items-center mt-[5px]">
                    <div>
                        <Img src={Logo} alt='logo' className='w-[100px] h-[70px]'/>
                    </div>
                    <div className='md:text-[24px] font-semibold text-[20px] mt-[10px]'>
                        Your Challenge Is Ready!
                    </div>
                </div>
                <div className='flex flex-row px-[10px] my-[10px] md:px-[20px] justify-between items-center '>
                    <div className='flex-col flex items-start'>
                        <div className='flex justify-center items-center gap-[8px] flex-row'>
                            <div className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/clock.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Start date
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    01 July 2024
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[15px] items-center gap-[8px] flex-row'>
                            <div className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
                                <Img src='/images/arrow.png' alt='logo' className='w-[18px] h-[18px]'/>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-[13px] font-normal text-[#979797]'>
                                    Duration
                                </div>
                                <div className='text-[12px] font-medium text-[#343434]'>
                                    31 Days
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Img src='/images/girl.png' alt='logo' className='w-[94px] h-[134px]'/>
                    </div>
                </div>
                <div className="bg-[#979797] h-[1px] mx-[20px] flex-1" />
                <div className='text-[12px] text-[#000] px-[20px] mt-[10px] font-semibold'>
                    Engagement prediction
                </div>
                <div className="my-[10px] mx-[10px]">
                    <BarChart
                        params={{
                            labels: months,
                            datasets: [freq1],
                            chartType: 'line',
                        }}
                    />
                </div>
                <div className='md:text-[18px] px-[20px] text-[#979797]  text-center mt-[15px] font-semibold'>
                    Subscription starts at <span className='text-black font-bold'>$4.99</span> per user per month.
                    Cancel
                    anytime
                </div>
                <div className="mx-[20px]">
                <div
                    className="w-full h-[50px]  px-[20px] flex  flex-row justify-between items-center mt-[25px] iosCard">
                    <div className=" md:text-[18px] font-normal text-[#343434]">
                        Unlock 7 days free trial
                    </div>
                </div>
                </div>
                <div className="w-full mt-[10px] px-[20px] ">
                    <button className="uppercase  h-[30px] md:h-[45px] flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000]">SUBSCRIBE NOW</button>
                </div>
                <div className='px-[20px] text-center text-[8px] mt-[20px] text-[#979797]'>
                    By clicking <span className='text-black font-bold'>GET MY CHALLENGE, </span>I agree to pay $0.99 per
                    user per month and that if I do not cancel before
                    the end of the first month plan, it will convert to a monthly subscription plan and Reaction will
                    automatically charge my payment method the regular price of $5.99 per user every month thereafter
                    until
                    I cancel. I can cancel online by visiting the subscription page on Reaction’s website to avoid being
                    charged the next next billing cycle.
                </div>
                <div className='md:text-[24px]  text-center font-semibold text-[23px] mt-[15px] pb-[10px]'>
                    What you get
                </div>
                <div className='flex flex-col  gap-[10px] px-[20px] justify-start items-start'>
                    {list.map((item,index) => (
                        <div className='flex flex-row justify-start items-center'>
                            <div>
                                <Img src='/images/Ok.png' alt='logo'
                                     className='w-[30px] h-[30px] '/>
                            </div>
                            <div className="md:text-[14px] w-[275px] md:w-[330px]  text-[12px]  ml-[15px] font-semibold">
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

export default PaymentForm;
