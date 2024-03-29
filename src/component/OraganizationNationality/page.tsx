"use client"
import React, {useContext, useState} from "react";
import Image from "next/image";
import { AppContext } from "@/utils/ContextProvider";
import Ok from "../../../images/Ok.svg";
import info from "../../data.json"

const list = info.question5

const OraganizationNationality = () => {

    const [selected, setSelected] = useState(null);
    const { setState, handleNextStep } = useContext(AppContext)


    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelected(index);
        setState(prevState => ({ ...prevState, organization: list[index].name }))
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px]">Is your organization <br/> national or international?</h1>
            <div className="flex flex-col px-[20px] gap-[15px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={` emoji rounded-[10px] px-[15px] py-[30px] relative ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col w-[100%] justify-center items-center`}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={30}
                            height={30}
                        />
                        <h1 className="text-[#343434]  md:text-[20px] text-[18px] max-w-[250px]   font-semibold">{item.name}</h1>
                        {selected === index && (
                            <Image src={Ok} alt={'Tick'} width={20} height={20} className="absolute top-[5px] right-[5px]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OraganizationNationality;
