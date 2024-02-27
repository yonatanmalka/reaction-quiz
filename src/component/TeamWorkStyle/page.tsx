"use client"
import React, {useContext, useState} from "react";
import Image from "next/image"
import { AppContext } from "@/utils/ContextProvider";
import Ok from "../../../images/Ok.svg";
import info from "../../data.json"

const list = info.question3

const TeamWorkStyle = () => {

    const [selected, setSelected] = useState(null);
    const { setState, handleNextStep } = useContext(AppContext)

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelected(index);
        setState(prevState => ({ ...prevState, work_style: list[index].name }))
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px] px-[20px]">What is your teams <br/> work style?</h1>
            <div className="grid px-[20px] grid-cols-2 gap-x-[16px] gap-y-[12px] md:gap-x-[22px] md:gap-y-[19px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        key={index}
                        className={` emoji rounded-[15px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col  gap-[5px] py-[24px] md:py-[22px] justify-center relative items-center`}
                        onClick={() => handleCardClick(index)}
                    >
                        <Image src={item.image} alt={"image"} width={30} height={30} />
                        <h1 className="text-[#343434] text-[14px] mt-[4px] md:text-[14px] font-semibold">{item.name}</h1>
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

export default TeamWorkStyle;
