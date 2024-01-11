"use client"

import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";

interface QuestionProps {
    handleClick: () => void;
}

const User:React.FC<QuestionProps> = ({handleClick}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <div className="flex justify-center mt-[30px] items-center">
                <h1 className="text-[#000] mb-[10px] text-[22px] font-semibold text-center">
                    Enter your details to get access to the admin dashboard
                </h1>
            </div>
            <div className="w-full flex  gap-[10px] mt-[20px] flex-row ">
                <div className='w-[50%]'>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 p-2 border bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                    />
                </div>


                <div className='w-[50%]'>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 p-2 bg-[#EFF3F6] border border-[#EFF3F6]  rounded-md w-full"
                    />
                </div>
            </div>
            <div>

            </div>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Work Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-[10px] p-2 border  bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
            />
            <button
                onClick={handleClick}
                className="uppercase  text-[#000] mt-[44px] py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            >
                Next
            </button>
        </div>
    );
};

export default User;
