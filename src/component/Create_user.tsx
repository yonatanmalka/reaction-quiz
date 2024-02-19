"use client"

import React, { useContext, useState } from "react";
import { toast, Toaster } from 'sonner';
import { useMutation } from "@apollo/client";
import { SAVE_QUIZ_MUTATION } from "@/utils/cms/mutations/quiz";
import client from "@/utils/apolloClient";
import { airtableClient } from "@/utils/airtableClient";
import { AppContext } from "@/utils/ContextProvider";
import { FieldSet } from "airtable";

interface QuestionProps {
    handleClick: () => void;
}

const User: React.FC<QuestionProps> = ({ handleClick }) => {
    const [save_quiz, { data, loading, error }] = useMutation<any>(
        SAVE_QUIZ_MUTATION,
        { client }
    )
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const state = useContext(AppContext)

    const isValidEmail = (email: string) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const submit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await airtableClient('Quiz Results').create([
                {
                    //@ts-ignore
                    fields: {
                        "Select Your Main Goal": state.goal,
                        "What type of organization are you working in?": state.company,
                        "What is your team's work style?": state.work_style,
                        "What is your team’s work schedule like?": state.work_schedule,
                        "Are your organization national or international?": state.organization,
                        "What is your team size?": state.team_size,
                        "How do you perceive the overall morale of your team?": state.moral,
                        "Do team members actively participate and contribute?": state.actively_participate,
                        "How often do you experience  conflicts in your team?": state.team_conflicts_experince,
                        "Do team members often experience high levels of stress at work?": state.stress_at_work,
                        "How well do team members know each other on a personal level?": state.team_members_know_each_other_on_persoal_level,
                        "Team members feel comfortable expressing their thoughts and ideas openly": state.team_members_comfort,
                        "Select up to three areas where you believe the team could improve the most": state.improve_team.join(','),
                        "Let’s create a step challenge Title": state.create_step_challenge?.Challenge_title,
                        "Let’s create a step challenge Date": JSON.stringify(state.create_step_challenge.selectedDate),
                        "Would you like to motivate participation with rewards?": state.participation_reward,
                        "Enter your details to get access to the admin dashboard user name": `${firstName} ${lastName}`,
                        "Enter your details to get access to the admin dashboard user email": email
                    }
                }
            ]);
            console.log('Quiz saved:', response);
        } catch (error) {
            console.error('Error creating quiz:', error);
        }
    }

    const handleNextClick = async (e: any) => {
        if (firstName === "" && lastName === "" && !isValidEmail(email)) {
            toast.error('Fill all the Details');
        } else if (firstName === "") {
            toast.error('Write First Name');
        } else if (lastName === "") {
            toast.error('Write Last Name');
        } else if (!isValidEmail(email)) {
            toast.error('Write Correct Email');
        } else {
            state.admin_detail.first_Name = firstName
            state.admin_detail.last_Name = lastName
            state.admin_detail.email = email
            // console.log(states, JSON.stringify(states.create_step_challenge.selectedDate),  states.improve_team.join());
            await submit(e);
            handleClick();
        }
    };


    return (
        <div>
            <div className="flex justify-center mt-[30px] items-center">
                <h1 className="text-[#000] mb-[10px] md:text-[24px] text-[22px] font-semibold text-center">
                    Enter your details to get access to the admin dashboard
                </h1>
            </div>
            <div className="w-full flex px-[30px]   gap-[10px] mt-[20px] flex-row ">
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
            <div className="px-[30px]">
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
            <div className="px-[30px]">
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
