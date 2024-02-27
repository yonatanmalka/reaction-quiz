"use client"

import React, { useContext, useState} from "react";
import Image from "next/image";
import Logo from "../../../images/logo.svg";
import Ok from "../../../images/Ok.svg"
import { AppContext } from "@/utils/ContextProvider";
import info from "../../data.json"

const data = info.question1

const MainGoal = () => {

    const { setState, isVideoShown, handleNextStep } = useContext(AppContext)

    const [selected, setSelected] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelected(index);
        setState(prevState => ({ ...prevState, goal: data[index].name }))
        handleNextStep();
    };

    return (
        <div className="main_goal">
            {isVideoShown && <video playsInline loop controls controlsList="nodownload" poster="/poster.png" className="md:w-[400px] w-[425px] p-3 fixed top-0 -z-[100]">
                <source src="./reaction.mp4" type="video/mp4"/>
            </video>}
            <div className={`bg-white pt-5 ${isVideoShown ? 'mt-[30vh]' : ''} md:mb-[280px] mb-[300px]`}>
                <div className="flex justify-center">
                    <Image src={Logo} alt={'logo'} className="w-[120px] h-[55px]"/>
                </div>
                <div className="mt-[22px] md:mt-[20px] flex flex-col text-center">
                    <h1 className="text-[35px] font-medium text-center">
                        SELECT YOUR
                    </h1>
                    <h1 className="text-[35px] font-bold text-center">MAIN GOAL</h1>
                </div>
                <div className="text-[#979797] text-[12px] font-medium text-center mt-[10px] md:mt-[2px]">
                    1-MINUTE
                </div>
                <div className="mt-[25px] px-[20px] md:mt-[12px]">
                    <div className="grid grid-cols-2 gap-x-[15px] gap-y-[12px] mt-[15px] md:mt-[8px]">
                        {data.map((item, index) => (
                            <button
                                key={index}
                                className={`rounded-[12px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'}  ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col  gap-[3px] md:gap-[5px] py-[25px] justify-center relative items-center transition duration-300 ease-in-out hover:bg-opacity-30 hover:bg-yellow-400 hover:border-[#F9B22D]`}
                                onClick={() => handleCardClick(index)}
                            >
                                <Image src={item.Image} alt={"image"} width={35} height={35} className="w-[35px] h-[35px]"/>
                                <h1 className="text-[#343434] text-[14px] font-semibold">{item.name}</h1>
                                {selected === index && (
                                    <div className="TickImage">
                                        <Image src={Ok} alt={'Tick'} width={20} height={20}/>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="md:px-[20px] md:mt-[40px] mt-[15px]">
                    <div className="text-center text-[#606060] text-[12px] mt-[17px]">
                        By selecting one of the options above, you agree with
                        <button className="underline">
                            <a href="https://www.reaction-club.com/termsofuse/" target="_blank" rel="noopener noreferrer">
                                Terms of Conditions,
                            </a>
                        </button>
                        <button className="underline">
                            <a href="https://www.reaction-club.com/privacypolicy/" target="_blank"
                            rel="noopener noreferrer">
                                Privacy Policy,
                            </a>
                        </button>
                        <button className="underline">
                            <a href="https://www.reaction-club.com/termsofuse/" target="_blank" rel="noopener noreferrer">
                                Subscription Terms
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainGoal;
