"use client"
import React, {useContext, useState} from "react";
import {Img} from "@/utils/Img";
import { AppContext } from "@/utils/ContextProvider";
import info from "../../data.json"

const images = info.question12

const TeamRelationship = () => {

    const [selectedCard, setSelectedCard] = useState(null);
    const { setState, handleNextStep } = useContext(AppContext)

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setState(prevState => ({ ...prevState, team_members_know_each_other_on_persoal_level: images[index].name }))
        handleNextStep();
    };

    return (
        <div>
            <div className="flex mt-[30px] justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    How well do team members <br/> know each other on a <br/> personal level?
                </h1>
            </div>
            <div className="grid px-[20px] grid-cols-5 gap-x-[8px] md:gap-x-[15px] w-[100%]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={` emoji rounded-[10px] py-[12px] relative ${selectedCard === index ? 'bg-opacity-30' : ''} ${selectedCard === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selectedCard === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-row w-[100%] justify-center items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div>
                            <Img src={image.image} alt={`Image ${index + 1}`} className="w-[30px] h-[30px]"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[100%] px-[20px] flex flex-row justify-between mt-[5px]">
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very limited
                </div>
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very well
                </div>
            </div>
        </div>
    );
};

export default TeamRelationship;
