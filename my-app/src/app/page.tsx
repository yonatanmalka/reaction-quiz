"use client"

import React, {useState} from "react";
import Image from "next/image";
import Logo from "../../images/logo.svg";
import Back from "../../images/back.svg";
import Question2 from "@/component/Questions2/page";
import Question3 from "@/component/Questions3/page";
import Question4 from "@/component/Questions4/page";
import Question5 from "@/component/Questions5/page";
import Question6 from "@/component/Questions6/page";
import Question7 from "@/component/Questions7/page";
import Question1 from "@/component/Questions01/page";
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

const Dailog = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const getProgressBarWidth = () => {
        return ((currentStep - 1) / 19) * 100;
    };

    const handleNextStep = () => {
        setTimeout(() => {
            setCurrentStep((prevStep) => prevStep + 1);
        }, 1000);
    };

    return(
        <main className="flex justify-center items-center w-[100vw] h-[100vh]">
            <div className="w-[90vw] h-[95vh] md:w-[420px] bg-white rounded-[24px] shadow-lg p-[15px]">
                {currentStep !== 1 && (
                    <div className="flex flex-row justify-between items-end">
                        <button onClick={() => setCurrentStep(currentStep - 1)}>
                            <Image src={Back} alt={'backButton'} width={15} height={14} />
                        </button>
                        <Image src={Logo} alt={'logo'} width={103} height={50} />
                        <div className="text-[#3C8AF0] text-[16px] font-medium">
                            <span className="text-[#3C8AF0]">{currentStep}</span>/<span className="text-[#979797]">20</span>
                        </div>
                    </div>
                )}
                {currentStep !== 1 && (
                    <div className="mt-[13px]">
                        <div
                            className="w-[100%] bg-[#E1E1E1] h-[5px] rounded-md overflow-hidden"
                            style={{ borderRadius: '3px' }}
                        >
                            <div
                                className="bg-[#2C98F0] h-full transition-all"
                                style={{
                                    width: `${getProgressBarWidth()}%`,
                                    borderRadius: '3px',
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="w-[100%]">
                    {currentStep === 1 && ( <Question1 handleClick={() => setCurrentStep(2)}/> )}
                    {currentStep === 2 && ( <Question2 handleNextStep={handleNextStep} /> )}
                    {currentStep === 3 && ( <Question3 handleNextStep={handleNextStep} /> )}
                    {currentStep === 4 && ( <Question4 handleNextStep={handleNextStep}  /> )}
                    {currentStep === 5 && ( <Question5 handleNextStep={handleNextStep} /> )}
                    {currentStep === 6 && ( <Question6 handleNextStep={handleNextStep} /> )}
                    {currentStep === 7 && ( <Question7 handleClick={() => setCurrentStep(8)}  /> )}
                    {currentStep === 8 && ( <Question8 handleNextStep={handleNextStep}  /> )}
                    {currentStep === 9 && ( <Question9 handleNextStep={handleNextStep}  />  )}
                    {currentStep === 10 && ( <Question10 handleNextStep={handleNextStep}  /> )}
                    {currentStep === 11 && ( <Question11 handleNextStep={handleNextStep} />)}
                    {currentStep === 12 && ( <Question12 handleNextStep={handleNextStep} /> )}
                    {currentStep === 13 && ( <Question13  handleNextStep={handleNextStep} /> )}
                    {currentStep === 14 && ( <Question14  handleClick={() => setCurrentStep(15)} />)}
                    {currentStep === 15 && ( <Question15  handleNextStep={() => setCurrentStep(16)} /> )}
                    {currentStep === 16 && ( <Questions16  handleClick={() => setCurrentStep(17)} /> )}
                    {currentStep === 17 && ( <Question18  handleClick={() => setCurrentStep(18)} /> )}
                    {currentStep === 18 && ( <Question19  handleNextStep={handleNextStep} /> )}
                    {currentStep === 19 && ( <Questions20   handleClick={() => setCurrentStep(20)} /> )}
                    {currentStep === 20 && ( <Questions20  handleClick={() => setCurrentStep(18)} /> )}
                </div>
            </div>
        </main>
    )
}

export default Dailog;
