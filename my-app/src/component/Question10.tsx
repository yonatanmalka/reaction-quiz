"use client"
import React, {useState} from "react";
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
            <div className="flex mt-[30px] justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[20px] md:text-[24px] font-semibold text-center">
                    How often do you experience conflicts in your team?
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
