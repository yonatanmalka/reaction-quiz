"use client"
import React, { useEffect, useState, useContext } from "react";
import 'swiper/css';

import 'swiper/css/pagination';
import { LogosSlider } from "@/component/logosSlider";
import info from "../../data.json"
import { AppContext } from "@/utils/ContextProvider";

const LoadingWithSlider = () => {

    const { setCurrentStep } = useContext(AppContext)

    const logos1 = info.question15.logos1
    const logos2 = info.question15.logos2
    const logos3 = info.question15.logos3

    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                const nextPercent = prevPercent + 1;
                if (nextPercent === 100) {
                    clearInterval(interval); // Stop the interval when percent reaches 100
                    setTimeout(() => setCurrentStep(16), 3300); // Call handleNextStep after 2 seconds
                }
                return nextPercent;
            });
        }, 150); // Adjust the interval duration for smoother animation
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [setCurrentStep]);

    return (
        <div className="flex mt-[60px] flex-col gap-[20px] justify-center items-center">
            <div className="text-[14px] text-[#343434] font-bold mt-[-10px]">
                Analysing team’s engagement score...
            </div>
            <div className="w-[100%] mt-[10px]">
                <h1 className="text-center mb-[5px] text-[#343434] font-bold text-[20px] md:text-[22px]">
                    {percent}%
                </h1>
                <div
                    className="w-[100%] bg-[#E1E1E1] h-[5px] md:h-[8px] rounded-md overflow-hidden"
                    style={{ borderRadius: "5px" }}
                >
                    <div
                        className="bg-[#5553FE] h-full transition-all"
                        style={{
                            width: `${percent}%`,
                            borderRadius: "5px",
                        }}
                    />
                </div>
            </div>
            <div className="mt-[20px] sm:mt-[30px] text-center text-[14px] md:text-[22px] font-bold text-[#5553FE]">
                5,000+ Companies<br/>
                <span className="text-[16px] font-semibold text-[#343434]">
                    have chosen Reaction
                </span>
            </div>
            <div className="mt-[20px] w-full">
                <LogosSlider items1={logos1} items2={logos2} items3={logos3}/>
            </div>
        </div>
    );
};

export default LoadingWithSlider;
