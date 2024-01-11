"use client"

import React, {useState} from "react";
import Image from "next/image"
import Ok from "../../../images/Ok.svg";

const list = [
    {
        name : "1-15",
    },
    {
        name : "16-99",
    },
    {
        name: "100-249",
    },
    {
        name: "250+",
    }
]

interface QuestionProps {
    handleNextStep: () => void;
}
const Question6:React.FC<QuestionProps> = ({ handleNextStep }) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelected(index);
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px]">What is your team size?</h1>
            <div className="flex flex-col gap-[15px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={`rounded-[10px] py-[22px] relative ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-row w-[100%] justify-center items-center`}
                    >
                        <h1 className="text-[#343434] text-[18px] md:text-[20px] font-semibold">{item.name} <span className="font-normal">Team members</span></h1>
                        {selected === index && (
                            <Image src={Ok} alt={'Tick'} width={20} height={20} className="absolute top-[5px] right-[5px]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question6;
