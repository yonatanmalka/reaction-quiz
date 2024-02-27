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

    const { currentStep, setCurrentStep, handleNextStep } = useContext(AppContext)

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
            {currentStep === 1 && (<MainGoal handleNextStep={handleNextStep}/>)}
            {currentStep === 2 && (<OrganizationType handleNextStep={handleNextStep}/>)}
            {currentStep === 3 && (<TeamWorkStyle handleNextStep={handleNextStep}/>)}
            {currentStep === 4 && (<WorkSchedule handleNextStep={handleNextStep}/>)}
            {currentStep === 5 && (<OraganizationNationality handleNextStep={handleNextStep}/>)}
            {currentStep === 6 && (<TeamSize handleNextStep={handleNextStep}/>)}
            {currentStep === 7 && (<Loading handleNextStep={() => setCurrentStep(8)}/>)}
            {currentStep === 8 && (<TeamMoral handleNextStep={handleNextStep}/>)}
            {currentStep === 9 && (<TeamActivity handleNextStep={handleNextStep}/>)}
            {currentStep === 10 && (<TeamConflicts handleNextStep={handleNextStep}/>)}
            {currentStep === 11 && (<TeamStress handleNextStep={handleNextStep}/>)}
            {currentStep === 12 && (<TeamRelationship handleNextStep={handleNextStep}/>)}
            {currentStep === 13 && (<TeamComfortable handleNextStep={handleNextStep}/>)}
            {currentStep === 14 && (<ImproveAreas handleNextStep={handleNextStep}/>)}
            {currentStep === 15 && (<LoadingWithSlider handleNextStep={() => setCurrentStep(16)}/>)}
            {currentStep === 16 && (<Charts handleNextStep={handleNextStep}/>)}
            {currentStep === 17 && (<RecommendedPlan handleNextStep={handleNextStep}/>)}
            {currentStep === 18 && (<CreateChallange handleNextStep={handleNextStep}/>)}
            {currentStep === 19 && (<Competition_Type handleNextStep={handleNextStep}/>)}
            {currentStep === 20 && (<MembersGoal handleNextStep={handleNextStep}/>)}
            {currentStep === 21 && (<ChallengeGoal handleNextStep={handleNextStep}/>)}
            {currentStep === 22 && (<Rewards handleNextStep={handleNextStep}/>)}
            {currentStep === 23 && (<Question19 handleNextStep={handleNextStep}/>)}
            {currentStep === 24 && (<Inclusivity handleNextStep={handleNextStep}/>)}
            {currentStep === 25 && (<LoadingWithComments handleNextStep={() => setCurrentStep(26)}/>)}
            {currentStep === 26 && (<Create_user handleNextStep={handleNextStep}/>)}
            {currentStep === 27 && (<TrialDiscount/>)}
        </div>
    )
}

export default Questionary;
