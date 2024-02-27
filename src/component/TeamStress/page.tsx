"use client"

import React, { useContext, useState } from "react";
import { Img } from "@/utils/Img";
import { AppContext } from "@/utils/ContextProvider";
import info from "../../data.json"

const list = info.question11

const TeamStress = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const { setState, handleNextStep } = useContext(AppContext)

    const handleCardClick = (index:number) => {
        // @ts-ignore
        setSelectedCard(index);
        setState(prevState => ({ ...prevState, stress_at_work: list[index].name }))
        handleNextStep();
    };

    return (
        <div>
            <div className="textDiv mt-[30px]">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    Do team members often <br/> experience high levels of <br/> stress at work?
                </h1>
            </div>
            <div className="yesCardDiv">
                {list.map((item,index) => (
                <div
                    key={index}
                    className={`YesCard cursor-pointer ${selectedCard === index ? "selected" : ""}`}
                    onClick={() => handleCardClick(index)}
                >
                    <div>
                        <Img src={item.images} alt="none" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                    </div>
                    <div className="text-[#343434] font-semibold text-[16px] md:text-[20px] mt-[5px]">{item.name}</div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default TeamStress;
