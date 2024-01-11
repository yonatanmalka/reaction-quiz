"use client"
import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question8:React.FC<QuestionProps> = ({handleNextStep}) => {
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
            <div className="mt-[30px] flex justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
                    How do you perceive the overall morale of your team?
                </h1>
            </div>
            <div className="grid grid-cols-5 gap-x-[5px] md:gap-x-[10px] w-[100%]">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`rounded-[10px] py-[15px] relative ${selectedCard === index ? 'bg-opacity-30' : ''} ${selectedCard === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selectedCard === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-row w-[100%] justify-center items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div>
                            <Img src={image} alt={`Image ${index + 1}`} className="w-[30px] h-[30px]"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[100%] flex flex-row justify-between mt-[5px]">
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very low
                </div>
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very High
                </div>
            </div>
        </div>
    );
};

export default Question8;
