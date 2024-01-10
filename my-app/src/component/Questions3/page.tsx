"use client"
import React, {useState} from "react";
import Image from "next/image"
import Technologist from "../../../images/Technologist.svg";
import House from "../../../images/House.svg";
import OfficeBuilding from "../../../images/Office Building.svg";
import Bus from "../../../images/Bus.svg";
import Ok from "../../../images/Ok.svg";

const list = [
    {
        image: Technologist,
        name : "Remote",
    },
    {
        image: OfficeBuilding,
        name : "On-Site",
    },
    {
        image: House,
        name: "Hybrid",
    },
    {
        image: Bus,
        name: "Other",
    }
]

interface QuestionProps {
    handleNextStep: () => void;
}
const Question3:React.FC<QuestionProps> = ({ handleNextStep }) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelected(index);
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[24px] md:text-[28px] text-[#000] text-center font-semibold mt-[20px] px-[20px]">What is your teams work style?</h1>
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[12px] md:gap-x-[22px] md:gap-y-[19px] mt-[20px]">
                {list.map((item,index) => (
                    <button
                        key={index}
                        className={`rounded-[15px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-col  gap-[5px] py-[24px] md:py-[22px] justify-center relative items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Image src={item.image} alt={"image"} className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]" />
                        <h1 className="text-[#343434] text-[16px] md:text-[20px] font-semibold">{item.name}</h1>
                        {selected === index && (
                            <div className="TickImage">
                                <Image src={Ok} alt={'Tick'} width={20} height={20} />
                            </div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question3;
