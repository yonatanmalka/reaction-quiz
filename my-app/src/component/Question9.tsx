"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question9:React.FC<QuestionProps> = ({handleNextStep}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
        handleNextStep();
    };

    return (
        <div>
            <div className="textDiv mt-[30px]">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    Do team members actively participate and contribute?
                </h1>
            </div>
            <div className="yesCardDiv">
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
        </div>
    );
};

export default Question9;
