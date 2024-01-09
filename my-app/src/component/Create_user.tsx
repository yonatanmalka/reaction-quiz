"use client"

import React, {useState} from "react";
import Image from "next/image";
import Background from "../../public/images/QuestionsBack.jpg";
import {Img} from "@/utils/Img";

const User = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="px-[30px]">
            <div className="flex justify-center  items-center">
                <h1 className="text-[25px] font-semibold text-center">
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
        </div>
    );
};

export default User;
