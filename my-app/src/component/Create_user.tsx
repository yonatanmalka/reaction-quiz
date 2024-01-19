"use client"

import React, { useState } from "react";
import { toast, Toaster } from 'sonner';
import { useMutation } from "@apollo/client";
import { SAVE_QUIZ_MUTATION } from "@/utils/cms/mutations/quiz";
import client from "@/utils/apolloClient";

interface QuestionProps {
    handleClick: () => void;
    setData: any;
    states: any;
}

const User: React.FC<QuestionProps> = ({ handleClick, setData, states }) => {
    const [save_quiz, { data, loading, error }] = useMutation<any>(
        SAVE_QUIZ_MUTATION,
        {
            client
        }
    )
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const isValidEmail = (email: string) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const submit = async (e: any) => {
        e.preventDefault();
        const variables: any = {
            categories: {
                nodes: [{ id: '97' }]
            },
            areYourOrganizationNationalOrInternational: states.organization,
            doTeamMembersActivelyParticipateAndContribute: states.actively_participate,
            doTeamMembersOftenExperienceHighLevelsOfStressAtWork: states.stress_at_work,
            enterYourDetailsToGetAccessToTheAdminDashboard: {
                firstName: states.admin_detail?.first_Name,
                lastName: states.admin_detail?.last_Name,
                workEmail: states.admin_detail?.email
            },
            howDoYouPerceiveTheOverallMoraleOfYourTeam: states.moral,
            howOftenDoYouExperienceConflictsInYourTeam: states.team_conflicts_experince,
            howWellDoTeamMembersKnowEachOtherOnAPersonalLevel: states.team_members_know_each_other_on_persoal_level,
            letSCreateAStepChallengeDate: JSON.stringify(states.create_step_challenge.selectedDate),
            letSCreateAStepChallengeTitle: states.create_step_challenge?.Challenge_title,
            selectUpToThreeAreasWhereYouBelieveTheTeamCouldImproveTheMost: states.improve_team.join(),
            selectYourMainGoal: states.goal,
            teamMembersFeelComfortableExpressingTheirThoughtsAndIdeasOpenly: states.team_members_comfort,
            whatIsYourTeamSWorkScheduleLike: states.work_schedule,
            whatIsYourTeamSize: states.team_size,
            whatIsYourTeamsWorkStyle: states.work_style,
            whatTypeOfOrganizationAreYouWorkingIn: states.company,
            wouldYouLikeToMotivateParticipationWithRewards: states.participation_reward
        };
        try {
            const response = await save_quiz({ variables });
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
            const data = {
                first_Name: firstName,
                last_Name: lastName,
                email: email,
            };
            await setData(data);
            // console.log(states, JSON.stringify(states.create_step_challenge.selectedDate),  states.improve_team.join());
            // await submit(e);
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
