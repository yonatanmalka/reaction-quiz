"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
    setData:any;
}
const Question10:React.FC<QuestionProps> = ({handleNextStep,setData}) => {

    const images = [
        {
            image:'/images/11star.png',
            name:'1 Star'
        },
        {
            image:'/images/22star.png',
            name:'2 Star'
        },
        {
            image:'/images/33star.png',
            name:'3 Star'
        },
        {
            image:'/images/44star.png',
            name:'4 Star'
        },
        {
            image:'/images/55star.png',
            name:'5 Star'
        }
    ];

    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelectedCard(index);
        setData(images[index].name)
        handleNextStep();
    };

    return (
        <div>
            <div className="flex mt-[30px] justify-center  items-center">
                <h1 className="text-[#000] mb-[40px] text-[22px] md:text-[26px] font-semibold text-center">
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
                            <Img src={image.image} alt={`Image ${index + 1}`} className="w-[30px] h-[30px]"/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-[100%] flex flex-row justify-between mt-[5px]">
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Very frequently
                </div>
                <div className="text-[#343434] font-semibold text-[12px] md:text-[14px]">
                    Rarely
                </div>
            </div>
        </div>
    );
};

export default Question10;
