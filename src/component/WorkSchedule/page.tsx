"use client"
import React, {useContext, useState} from "react";
import Image from "next/image"
import { AppContext } from "@/utils/ContextProvider";
import Ok from "../../../images/Ok.svg";
import info from "../../data.json"

const list = info.qeustion4

const WorkSchedule = () => {

    const [selected, setSelected] = useState(null);
    const { setState, handleNextStep } = useContext(AppContext)

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelected(index);
        setState(prevState => ({ ...prevState, work_schedule: list[index].name }))
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px] md:mt-[20px]">What is your team’s work <br/> schedule like?</h1>
            <div className="flex flex-col px-[20px] gap-[10px] mt-[30px] md:mt-[20px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={` emoji rounded-[10px] px-[15px] py-[20px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-row w-[100%] justify-between items-center`}
                    >
                        <div className="flex flex-row gap-[14px] md:gap-[20px] items-center">
                            <Image src={item.image} alt={'Logo'} width={28} height={28} />
                            <h1 className="text-[#343434] text-[18px] md:text-[20px] font-semibold">{item.name}</h1>
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

export default WorkSchedule;
