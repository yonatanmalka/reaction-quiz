"use client"
import React, {useState} from "react";
import Image from "next/image";
import Ok from "../../../images/Ok.svg";
import NationalImage from "../../../images/pin.png";
import InternationalImage from "../../../images/earth.png";
const list = [
    {
        image: NationalImage,
        name : "Everyone in my team are on the same time zone?",
    },
    {
        image: InternationalImage,
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
            <div className="flex flex-col px-[20px] gap-[15px] mt-[30px]">
                {list.map((item,index) => (
                    <button
                        onClick={() => handleCardClick(index)}
                        key={index} className={` emoji rounded-[10px] px-[15px] py-[30px] relative ${selected === index ? 'bg-opacity-30' : ''} ${selected === index ? 'bg-yellow-400' : 'bg-[#F5F5F5]'} border-[1px] ${selected === index ? 'border-none' : 'border-none'} border-[#979797] flex flex-col w-[100%] justify-center items-center`}
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            width={35}
                            height={35}
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

export default Question4;
