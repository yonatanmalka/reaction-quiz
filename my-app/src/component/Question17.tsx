"use client"

import React, {useState} from "react";
import {Img} from "@/utils/Img";

interface QuestionProps {
    handleNextStep: () => void;
}

const Question17: React.FC<QuestionProps> = ({handleNextStep}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
        handleNextStep();
    };

    return (
        <div className="md:pl-[10px] mt-[5px] relative  px-0">
            <div className="textDiv ">
                <h1 className="text-[#000] mb-[10px] text-[20px] md:text-[26px] font-semibold text-center">
                    Recommanded plan
                </h1>
            </div>
            <div className="w-[20px] md:h-[200px] h-[180px] md:top-[70px] top-[55px] md:left-[18px] left-[7px]  absolute z-10 lineVertical">
            </div>
            <div className="flex  relative z-20 flex-row gap-[10px]">
                <div
                    className="bg-[#F9B22D] w-[35px] flex justify-center text-[18px] font-bold items-center h-[35px] rounded-full">
                    1
                </div>
                <div className="flex-col flex">
                    <div className="md:text-[12px] text-[10px] text-[#979797] font-semibold">
                        current date
                    </div>
                    <div className="md:text-[17px] text-[14px] text-[#343434] font-semibold">
                        Step challenge
                    </div>
                    <div className="md:text-[12px] text-[10px] text-[#787676] font-normal">
                        Get your team excited with a first challenge
                    </div>
                </div>

            </div>
            <div className="flex flex-row  relative z-20 mt-[10px] gap-[10px]">
                <div
                    className="bg-[#FFC55A] w-[35px] flex justify-center text-[18px] font-bold items-center h-[35px] rounded-full">
                    2
                </div>
                <div className="flex-col flex">
                    <div className="md:text-[12px] text-[10px] text-[#979797] font-semibold">
                        current date
                    </div>
                    <div className="md:text-[17px] text-[14px] text-[#343434] font-semibold">
                        Event                    </div>
                    <div className="md:text-[12px] text-[10px] text-[#787676] font-normal">
                        Create team event to connect people together
                    </div>
                </div>

            </div><div className="flex border-b pb-[10px] mt-[10px] relative  z-20 flex-row gap-[10px]">
            <div
                className="bg-[#FFFCF7] w-[35px] flex justify-center text-[18px] font-bold items-center h-[35px] rounded-full">
                3
            </div>
            <div className="flex-col flex">
                <div className="md:text-[12px] text-[10px] text-[#979797] font-semibold">
                    current date
                </div>
                <div className="md:text-[17px] text-[14px] text-[#343434] font-semibold">
                    Ongoing
                </div>
                <div className="md:text-[12px] text-[10px] text-[#787676] font-normal">
                    Unlock other app features to elevate team excitment
                </div>
            </div>

           </div>
            <div className="md:text-[14px] text-[12px] mt-[15px] text-center text-[#979797] font-normal">
                This strategy designed to maintain long-term engagement and maximize program ROI
            </div>
            <div className="mt-[]">
                <button className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[8px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]">
                    Get started
                </button>
            </div>
            <div className="md:text-[14px] text-[12px] md:mt-[15px] mt-[4px] underline text-center text-[#979797] font-normal">
                Create only one-time challenge
            </div>
        </div>
    );
};

export default Question17;
