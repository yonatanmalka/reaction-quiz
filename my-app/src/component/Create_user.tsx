"use client"

import React, {useState} from "react";
import { Toaster, toast } from 'sonner';
interface QuestionProps {
    handleClick: () => void;
    setData:any;
}

const User:React.FC<QuestionProps> = ({handleClick,setData}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const isValidEmail = (email:string) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleNextClick = () => {
        if (firstName === "" && lastName === "" && !isValidEmail(email)) {
            toast.error('Fill all the Details');
        } else if (firstName === "") {
            toast.error('Write First Name');
        } else if (lastName === "") {
            toast.error('Write Last Name');
        } else if (!isValidEmail(email)) {
            toast.error('Write Correct Email');
        } else {
            const data = {
                first_Name: firstName,
                last_Name: lastName,
                email: email,
            };
            setData(data);
            handleClick();
        }
    };



    return (
        <div>
            <div className="flex justify-center mt-[30px] items-center">
                <h1 className="text-[#000] mb-[10px] md:text-[26px] text-[22px] font-semibold text-center">
                    Enter your details to get access to the admin dashboard
                </h1>
            </div>
            <div className="w-full flex px-[20px]   gap-[10px] mt-[20px] flex-row ">
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
            <div className="px-[20px]">
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

            <div>
                <Toaster richColors position={"top-center"} closeButton={true}/>
            </div>
            <div className="px-[20px] mt-[190px]">
                <button
                    onClick={handleNextClick}
                    className="uppercase  text-[#000] mt-[144px] py-[12px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default User;
