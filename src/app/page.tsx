"use client"

import React, { useContext, useEffect } from "react";
import Question2 from "@/component/Questions2/page";
import Question3 from "@/component/Questions3/page";
import Question4 from "@/component/Questions4/page";
import Question5 from "@/component/Questions5/page";
import Question6 from "@/component/Questions6/page";
import Loading from "@/component/Questions7/page";
import Question15 from "@/component/Questions15/page";
import Questions20 from "@/component/Questions20/page";
import Questions16 from "@/component/Questions16/page";
import Question8 from "@/component/Question8";
import Question9 from "@/component/Question9";
import Question10 from "@/component/Question10";
import Question11 from "@/component/Question11";
import Question13 from "@/component/Question13";
import Question14 from "@/component/Question14";
import Question18 from "@/component/Question18";
import Question19 from "@/component/Question19";
import Question12 from "@/component/Question12";
import Question17 from "@/component/Question17";
import Create_user from "@/component/Create_user";
import DownLoad_App from "@/component/DownLoad_App";
import Question1 from "@/component/Questions01/page";
import TrialDiscount from "@/component/TrialDiscount/page";
import Competition_Type from "@/component/Competition_Type"
import MembersGoal from "@/component/Members_Goal";
import ChallengeGoal from "@/component/Challenge_Goal";
import Rewards from "@/component/Rewards";
import Inclusivity from "@/component/Inclusivity";
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
            {currentStep === 1 && (<Question1 handleNextStep={handleNextStep}/>)}
            {currentStep === 2 && (<Question2 handleNextStep={handleNextStep}/>)}
            {currentStep === 3 && (<Question3 handleNextStep={handleNextStep}/>)}
            {currentStep === 4 && (<Question4 handleNextStep={handleNextStep}/>)}
            {currentStep === 5 && (<Question5 handleNextStep={handleNextStep}/>)}
            {currentStep === 6 && (<Question6 handleNextStep={handleNextStep}/>)}
            {currentStep === 7 && (<Loading handleNextStep={() => setCurrentStep(8)}/>)}
            {currentStep === 8 && (<Question8 handleNextStep={handleNextStep}/>)}
            {currentStep === 9 && (<Question9 handleNextStep={handleNextStep}/>)}
            {currentStep === 10 && (<Question10 handleNextStep={handleNextStep}/>)}
            {currentStep === 11 && (<Question11 handleNextStep={handleNextStep}/>)}
            {currentStep === 12 && (<Question12 handleNextStep={handleNextStep}/>)}
            {currentStep === 13 && (<Question13 handleNextStep={handleNextStep}/>)}
            {currentStep === 14 && (<Question14 handleNextStep={handleNextStep}/>)}
            {currentStep === 15 && (<Question15 handleNextStep={() => setCurrentStep(16)}/>)}
            {currentStep === 16 && (<Questions16 handleNextStep={handleNextStep}/>)}
            {currentStep === 17 && (<Question17 handleNextStep={handleNextStep}/>)}
            {currentStep === 18 && (<Question18 handleNextStep={handleNextStep}/>)}
            {currentStep === 19 && (<Competition_Type handleNextStep={handleNextStep}/>)}
            {currentStep === 20 && (<MembersGoal handleNextStep={handleNextStep}/>)}
            {currentStep === 21 && (<ChallengeGoal handleNextStep={handleNextStep}/>)}
            {currentStep === 22 && (<Rewards handleNextStep={handleNextStep}/>)}
            {currentStep === 23 && (<Question19 handleNextStep={handleNextStep}/>)}
            {currentStep === 24 && (<Inclusivity handleNextStep={handleNextStep}/>)}
            {currentStep === 25 && (<Questions20 handleNextStep={() => setCurrentStep(26)}/>)}
            {currentStep === 26 && (<Create_user handleNextStep={handleNextStep}/>)}
            {currentStep === 27 && (<TrialDiscount/>)}
            {currentStep === 28 && (<DownLoad_App />)}
        </div>
    )
}

export default Questionary;
