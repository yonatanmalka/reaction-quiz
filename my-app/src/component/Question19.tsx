"use client"

import React, {useState} from "react";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question19:React.FC<QuestionProps> = ({handleNextStep}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
        handleNextStep();
    };

    return (
        <div>
            <div className="flex flex-col justify-center w-[100%] items-center  mt-[30px]">
                <h1 className="text-[24px] md:text-[24px] text-[#000] text-center font-semibold">
                    Would you like to motivate participation with rewards?
                </h1>
                <div>
                    <h1 className="text-center w-[250px] md:w-[350px] text-[12px] md:text-[16px] font-normal text-[#979797] mt-[8px] md:mt-[15px] pb-[15px] md:pb-[30px]">
                        Rewards are gift card that can be earned by employees for their achievements and are given at no
                        additional cost </h1>
                </div>
            </div>


            <div className="yesCardDiv mt-[15px] md:mt-[0px]">
                <div
                    className={`YesCard cursor-pointer ${selectedCard === "no" ? "selected" : ""}`}
                    onClick={() => handleCardClick("no")}
                >
                    <div>
                        <Img src="/images/no.png" alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">No</div>
                </div>
                <div
                    className={`YesCard cursor-pointer ${selectedCard === "yes" ? "selected" : ""}`}
                    onClick={() => handleCardClick("yes")}
                >
                    <div>
                        <Img src="/images/yes.png" alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">Yes</div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className="text-center w-[180px] md:w-[240px] text-[12px] md:text-[18px] font-normal text-[#979797] mt-[25px] md:mt-[40px]">
                    Rewards increase engagement by average X4
                     </h1>
            </div>

        </div>
    );
};

export default Question19;
