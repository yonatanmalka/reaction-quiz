"use client"

import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";

const Question18 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div className="px-[30px]">
            <div className="flex justify-center  items-center">
                <h1 className="text-[25px] font-semibold text-center">
                    Let’s create a step challenge!
                </h1>
            </div>
            <div className="w-full flex  gap-[10px] px-[40px] mt-[20px] flex-col ">
                <div className='w-[100%]'>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Challenge title (optional)"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 p-2 border bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                    />
                </div>


                <div className="mt-1 p-2 border bg-[#EFF3F6] h-[40px]  items-center flex flex-row border-[#EFF3F6] rounded-md w-full">
                    <div>
                        <Img src='/images/clock1.png' alt='none' className="w-[20px] h-[20px]"/>
                    </div>
                    <div className="text-[14px] ml-[10px]">
                        fri,1 Mar - Sun 3 Apr
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Question18;
