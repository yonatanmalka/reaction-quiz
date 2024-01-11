"use client"
import React, {useState} from "react";
import Image from "next/image";
import Ok from "../../../images/Ok.svg";

const list = [
    {
        name : "Everyone in my team are on the same time zone?",
    },
    {
        name : "My team members are spread globally",
    }
]

interface QuestionProps {
    handleNextStep: () => void
    setData:any;
}

const Question4:React.FC<QuestionProps> = ({handleNextStep,setData}) => {

    const [selected, setSelected] = useState(null);

    const handleCardClick = (index: number) => {
        // @ts-ignore
        setSelected(index);
        setData(list[index].name)
        handleNextStep();
    };

    return(
        <div>
            <h1 className="text-[22px] md:text-[26px] text-[#000] text-center font-semibold mt-[30px]">Are your organization national or international?</h1>
            <div className="flex flex-col gap-[15px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={`rounded-[10px] px-[15px] py-[30px] relative ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-[#F9B22D]' : 'border-[#979797]'} border-[#979797] flex flex-row w-[100%] justify-center items-center`}
                    >
                        <h1 className="text-[#343434]  md:text-[20px] text-[18px] max-w-[250px] max  font-semibold">{item.name}</h1>
                        {selected === index && (
                            <Image src={Ok} alt={'Tick'} width={20} height={20} className="absolute top-[5px] right-[5px]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question4;
