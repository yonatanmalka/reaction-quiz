"use client"
import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question10:React.FC<QuestionProps> = ({handleNextStep}) => {
    const images = [
        "/images/11star.png",
        "/images/22star.png",
        "/images/33star.png",
        "/images/44star.png",
        "/images/55star.png",
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
                <h1 className="text-[#000] mb-[40px] text-[20px] md:text-[26px] font-semibold text-center">
                    How often do you experience conflicts in your team?
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
                    Very frequently
                </div>
                <div className="text-[#343434] font-semibold text-[10px] md:text-[14px]">
                    Rarely
                </div>
            </div>
        </div>
    );
};

export default Question10;
