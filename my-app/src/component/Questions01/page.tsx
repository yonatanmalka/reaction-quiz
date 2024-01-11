"use client"

import React, {useState} from "react";
import Image from "next/image";
import Background from "../../../images/questionbackground.jpg";
import Logo from "../../../images/logo.svg";
import Pic1 from "../../../images/goals1.svg";
import Pic2 from "../../../images/goals2.svg";
import Pic3 from "../../../images/goals3.svg";
import Pic4 from "../../../images/goals4.svg";
import Ok from "../../../images/Ok.svg"

const data = [
    {
        Image:Pic1,
        name:"Bond my team"
    },
    {
        Image:Pic2,
        name:"Promote Wellbeing"
    },
    {
        Image:Pic3,
        name:"improve Fitness"
    },
    {
        Image:Pic4,
        name:"Not Sure"
    }
]

interface QuestionProps {
    handleClick: () => void;
}

const Question1:React.FC<QuestionProps> = ({handleClick}) => {
    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelected(index);
    };

    const handleNextClick = () => {
        if (selected !== null) {
            handleClick();
        } else {
            // Handle the case when no card is selected
            // You can add additional logic or provide feedback to the user
            console.log("No card selected");
        }
    };

    return(
        <div className="relative">
            <div className="flex mt-[40px] md:mt-[10px] justify-center">
                <Image src={Logo} alt={'logo'} className="w-[150px] h-[47px]" />
            </div>
            <div className="mt-[22px] md:mt-[10px] flex flex-col text-center">
                <h1 className="text-[30px] font-medium text-center">
                    AI-CUSTOMIZED <br/> WORKPLACE
                </h1>
                <h1 className="text-[30px] font-bold text-center">STEP CHALLENGE</h1>
            </div>
            <div className="flex justify-center">
                <h1 className="text-[#979797] text-[14px] mt-[10px] md:mt-[5px] font-normal">FIRST, SELECT YOUR <span className="font-bold">MAIN GOAL</span></h1>
            </div>
            <h1 className="text-[#000] text-[12px] font-medium text-center mt-[10px] md:mt-[2px]">
                1-MINUTE
            </h1>
            <div className="mt-[25px] md:mt-[12px]">
                <div className="grid grid-cols-2 gap-x-[15px] gap-y-[12px] mt-[15px] md:mt-[8px]">
                    {data.map((item,index) => (
                        <button
                            key={index}
                            className={`rounded-[12px] ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-col  gap-[3px] md:gap-[5px] py-[20px] md:py-[15px] justify-center relative items-center`}
                            onClick={() => handleCardClick(index)}
                        >
                            <Image src={item.Image} alt={"image"} className="w-[35px] h-[35px]" />
                            <h1 className="text-[#343434] text-[14px] font-semibold">{item.name}</h1>
                            {selected === index && (
                                <div className="TickImage">
                                    <Image src={Ok} alt={'Tick'} width={20} height={20} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            <div className="">
            <button onClick={handleNextClick} className="uppercase  h-[40px] flex items-center justify-center mt-[22px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] font-semibold leading-10 tracking-tight text-[#000]">
                Next
            </button>
            <div className="text-center text-[#606060] text-[12px]   mt-[17px]">
                By clicking “next”, you agree with <button className="underline">Terms of Conditions,</button><button className="underline">Privacy Policy,</button> <button className="underline">Subscription Terms</button>
            </div>
            </div>
        </div>
    )
}

export default Question1;
