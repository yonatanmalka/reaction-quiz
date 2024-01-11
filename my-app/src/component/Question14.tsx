"use client"

import React, {useState} from "react";
import {Img} from "@/utils/Img";

interface QuestionProps {
    handleClick: () => void;
}

const Question14: React.FC<QuestionProps> = ({handleClick, selected, setSelected}) => {
    const areasToImprove = [
        {title: "Communication"},
        {title: "Collaboration"},
        {title: "Time Management"}, {title: "Time Management"},
        {title: "Time Management"},
    ];


    const handleCardClick = (index: number) => {
        const newSelected = [...selected];
        const selectedIndex = newSelected.indexOf(index);

        if (selectedIndex === -1) {
            newSelected.push(index);
        } else {
            newSelected.splice(selectedIndex, 1);
        }

        setSelected(newSelected);
    };

    return (
        <div className="textDiv mt-[30px]">
            <div className="textDiv">
                <h1 className="text-[#000] mb-[10px] text-[22px] md:text-[26px] font-semibold text-center">
                    Select up to three areas where you believe the team could improve the most
                </h1>
            </div>
            <div className="slider-container mt-[10px] w-full">
                <div className="flex flex-col gap-[10px] pr-[10px] w-[100%]">
                    {areasToImprove.map((area, index) => (
                        <div
                            key={index}
                            className={`rounded-[10px] px-[15px] cursor-pointer relative py-[18px] md:py-[18px] ${selected.includes(index) ? 'bg-opacity-30' : ''} ${selected.includes(index) ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected.includes(index) ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] text-center w-[100%]`}
                            onClick={() => handleCardClick(index)}
                        >
                            <h1 className="text-[#343434] font-semibold text-[14px] md:text-[18px]">
                                {area.title}
                            </h1>
                            {selected.includes(index) && (
                                <div className="absolute top-[5px] right-[5px]">
                                    <Img src="/images/Ok.png" alt="none"
                                         className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]"/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[100%]">
                <button onClick={handleClick}
                        className="uppercase  h-[40px] flex items-center justify-center mt-[30px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[14px] md:text-[18px] font-semibold leading-10 tracking-tight text-[#000]">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Question14;
