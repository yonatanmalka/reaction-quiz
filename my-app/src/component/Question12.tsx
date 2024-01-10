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
            <div className="flex justify-center  items-center">
                <h1 className="texts">
                    How well do team members know each other on a personal level?
                </h1>
            </div>
            <div className="flex  px-[20px] justify-between">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`card ${selectedCard === index ? 'selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >
                        <div>
                            <Img src={image} alt={`Image ${index + 1}`} className="images"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="div2">
                <div className="text2">
                    Very low
                </div>
                <div className="text2">
                    Very High
                </div>
            </div>
        </div>
    );
};

export default Question12;
