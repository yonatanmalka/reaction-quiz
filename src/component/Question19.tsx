"use client"

import React, {useContext, useState} from "react";
import {Img} from "@/utils/Img";
import { AppContext } from "@/utils/ContextProvider";
import info from "../data.json"

interface QuestionProps {
    handleNextStep: () => void;
}

const list = info.question19

const Question19:React.FC<QuestionProps> = ({ handleNextStep }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const { setState } = useContext(AppContext)

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setState(prevState => ({ ...prevState, participation_reward: list[index].name }))
        handleNextStep();
    };

    return (
        <div>
            <div className="flex flex-col justify-center w-[100%] items-center mt-[30px]">
                <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold">
                    Would you like to motivate participation with rewards?
                </h1>
            </div>
            <div className="yesCardDiv mt-[100px]">
                {list.map((item,index) => (
                <div
                    key={index}
                    className={`YesCard cursor-pointer ${selectedCard === index ? "selected" : ""}`}
                    onClick={() => handleCardClick(index)}
                >
                    <div>
                        <Img src={item.image} alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">{item.name}</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Question19;
