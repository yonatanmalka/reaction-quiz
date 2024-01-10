"use client"
import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question12:React.FC<QuestionProps> = ({handleNextStep}) => {
    const images = [
        "/images/1star.png",
        "/images/2star.png",
        "/images/3star.png",
        "/images/4star.png",
        "/images/5star.png",
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index: number | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(index);
        handleNextStep();
    };

    return (
        <div>
            <div className="flex mt-[20px] justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    How well do team members know each other on a personal level?
                </h1>
            </div>
            <div className="grid grid-cols-5 gap-x-[20px] w-[100%]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`card cursor-pointer ${selectedCard === index ? 'selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div>
                            <Img src={image} alt={`Image ${index + 1}`} className="md:w-[35px] w-[25px] h-[25px] md:h-[35px]"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[100%] flex flex-row justify-between mt-[5px]">
                <div className="text-[#343434] font-semibold text-[10px] md:text-[14px]">
                    Very low
                </div>
                <div className="text-[#343434] font-semibold text-[10px] md:text-[14px]">
                    Very High
                </div>
            </div>
        </div>
    );
};

export default Question12;
