"use client"
import React, {useState} from "react";
import Image from "next/image"
import Clock from "../../../images/clock.svg";
import Pencil from "../../../images/Pencil.svg";
import ManPilot from "../../../images/ManPilot.svg";
import Ok from "../../../images/Ok.svg";

const list = [
    {
        image: Clock,
        name : "9 to 5",
    },
    {
        image: Clock,
        name : "Night shifts",
    },
    {
        image: ManPilot,
        name: "Flexible working hours",
    },
    {
        image: Pencil,
        name: "Other",
    }
]

interface QuestionProps {
    handleNextStep: () => void;
}
const Question4:React.FC<QuestionProps> = ({handleNextStep}) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelected(index);
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[28px] text-[#000] text-center font-semibold mt-[20px]">What is your team’s work schedule like?</h1>
            <div className="flex flex-col gap-[10px] mt-[20px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={`rounded-[10px] px-[15px] py-[15px] md:py-[18px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-row w-[100%] justify-between items-center`}
                    >
                        <div className="flex flex-row gap-[14px] md:gap-[20px] items-center">
                            <Image src={item.image} alt={'Logo'} className="w-[18px] md:w-[28px] h-[18px] md:h-[28px]" />
                            <h1 className="text-[#343434] text-[13px] md:text-[18px] font-semibold">{item.name}</h1>
                        </div>
                        {selected === index && (
                            <Image src={Ok} alt={'Tick'} width={20} height={20} />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question4;