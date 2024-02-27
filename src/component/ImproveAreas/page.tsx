"use client"

import React, { useContext, useState } from "react";
import { Img } from "@/utils/Img";
import { toast, Toaster } from "sonner";
import { AppContext } from "@/utils/ContextProvider";
import info from "../../data.json"

const ImproveAreas = ({ handleNextStep } : { handleNextStep: () => void }) => {
    const areasToImprove = info.question14;
    const [selected, setSelected] = useState<number[]>([]);

    const { setState } = useContext(AppContext)

    const handleCardClick = (index: number) => {
        const newSelected = [...selected];
        const selectedIndex = newSelected.indexOf(index);

        if (selectedIndex === -1) {
            newSelected.push(index);
        } else {
            newSelected.splice(selectedIndex, 1);
        }

        setSelected(newSelected);
    };

    const handleNextClick = () => {
        if (selected.length >= 1 && selected.length <= 3) {
            setState(prevState => ({ ...prevState, improve_team: selected.map((index) => areasToImprove[index].title) }))
            handleNextStep();
        } else if (selected.length > 3) {
            toast.error('You are allowed to select maximum 3 areas.');
        } else {
            toast.error('Please select at least 1 areas.');
        }
    };

    return (
        <div className="textDiv mt-[30px]">
            <div className="textDiv">
                <h1 className="text-[#000] mb-[10px] hy text-[22px] md:text-[26px] font-semibold text-center">
                    Select up to three areas where you believe the team could improve the most
                </h1>
            </div>
            <div className="slider-container mt-[10px] w-full">
                <div className="flex flex-col  px-[20px] gap-[10px] pr-[10px] w-[100%]">
                    {areasToImprove.map((area, index) => (
                        <div
                            key={index}
                            className={` emoji rounded-[10px] px-[15px] cursor-pointer relative py-[18px] md:py-[18px] ${
                                selected.includes(index) ? "bg-opacity-30" : ""
                            } ${selected.includes(index) ? "bg-yellow-400" : "bg-[#F5F5F5]"} border-[1px] ${
                                selected.includes(index) ? "border-none" : "border-none"
                            } border-[#979797]  w-[100%]`}
                            onClick={() => handleCardClick(index)}
                        >
                            <h1 className="text-[#343434] ml-[8px] font-semibold text-[18px]">{area.title}</h1>
                            {selected.includes(index) && (
                                <div className="absolute top-[20px] right-[5px]">
                                    <Img src="/images/Ok.png" alt="none"
                                         className="w-[20px] h-[20px] md:w-[20px] md:h-[20px]"/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <Toaster richColors position={"top-center"} closeButton={true}/>
            </div>
            <div className="w-[100%] px-[20px] pb-[40px]">
                <button
                    onClick={handleNextClick}
                    className="uppercase flex items-center justify-center mt-[30px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[14px] md:text-[18px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ImproveAreas;
