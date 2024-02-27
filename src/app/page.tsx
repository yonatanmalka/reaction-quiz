"use client"

import React, { useContext, useEffect } from "react";
import MainGoal from "@/component/MainGoal/page";
import OrganizationType from "@/component/OrganizationType/page";
import TeamWorkStyle from "@/component/TeamWorkStyle/page";
import WorkSchedule from "@/component/WorkSchedule/page";
import OraganizationNationality from "@/component/OraganizationNationality/page";
import TeamSize from "@/component/TeamSize/page";
import Loading from "@/component/Loading/page";
import TeamMoral from "@/component/TeamMoral/page";
import TeamActivity from "@/component/TeamActivity/page";
import TeamConflicts from "@/component/TeamConflicts/page";
import TeamStress from "@/component/TeamStress/page";
import TeamRelationship from "@/component/TeamRelationship/page";
import TeamComfortable from "@/component/TeamComfortable/page";
import ImproveAreas from "@/component/ImproveAreas/page";
import LoadingWithSlider from "@/component/LoadingWithSlider/page";
import Charts from "@/component/Charts/page";
import RecommendedPlan from "@/component/RecommendedPlan/page";
import CreateChallange from "@/component/CreateChallange/page";
import Competition_Type from "@/component/Competition_Type"
import MembersGoal from "@/component/Members_Goal";
import ChallengeGoal from "@/component/Challenge_Goal";
import Rewards from "@/component/Rewards";
import Question19 from "@/component/Question19";
import Inclusivity from "@/component/Inclusivity";
import LoadingWithComments from "@/component/LoadingWithComments/page";
import Create_user from "@/component/Create_user";
import TrialDiscount from "@/component/TrialDiscount/page";
import { AppContext } from "@/utils/ContextProvider";

const Questionary = () => {

    const { currentStep, handleNextStep } = useContext(AppContext)

    useEffect(() => {
        function sendHeightToParent () {
            // @ts-ignore
            const height = document.body.scrollHeight;
            // @ts-ignore
            window.parent.postMessage({
                'frameHeight': height
            }, '*'); // Replace '*' with your WordPress site's origin for added security
        }

        sendHeightToParent();
    }, [handleNextStep]);

    return (
        <div className="w-[100%] z-20 relative">
            {currentStep === 1 && (<MainGoal />)}
            {currentStep === 2 && (<OrganizationType />)}
            {currentStep === 3 && (<TeamWorkStyle />)}
            {currentStep === 4 && (<WorkSchedule />)}
            {currentStep === 5 && (<OraganizationNationality />)}
            {currentStep === 6 && (<TeamSize />)}
            {currentStep === 7 && (<Loading />)}
            {currentStep === 8 && (<TeamMoral />)}
            {currentStep === 9 && (<TeamActivity />)}
            {currentStep === 10 && (<TeamConflicts />)}
            {currentStep === 11 && (<TeamStress />)}
            {currentStep === 12 && (<TeamRelationship />)}
            {currentStep === 13 && (<TeamComfortable />)}
            {currentStep === 14 && (<ImproveAreas />)}
            {currentStep === 15 && (<LoadingWithSlider />)}
            {currentStep === 16 && (<Charts />)}
            {currentStep === 17 && (<RecommendedPlan />)}
            {currentStep === 18 && (<CreateChallange />)}
            {currentStep === 19 && (<Competition_Type />)}
            {currentStep === 20 && (<MembersGoal />)}
            {currentStep === 21 && (<ChallengeGoal />)}
            {currentStep === 22 && (<Rewards />)}
            {currentStep === 23 && (<Question19 />)}
            {currentStep === 24 && (<Inclusivity />)}
            {currentStep === 25 && (<LoadingWithComments />)}
            {currentStep === 26 && (<Create_user />)}
            {currentStep === 27 && (<TrialDiscount/>)}
        </div>
    )
}

export default Questionary;
