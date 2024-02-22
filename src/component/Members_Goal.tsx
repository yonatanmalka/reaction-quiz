"use client"

import { useContext, useState } from "react";
import { AppContext } from "@/utils/ContextProvider";
import { Img } from "@/utils/Img";
import { Toaster, toast } from "sonner";

function MembersGoal({ handleNextStep } : { handleNextStep: () => void }) {

  const { setState } = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState("automated")
  const [customGoal, setCustomGoal] = useState('')

  const handleNextClick = () => {
    if(selectedOption === 'automated') {
      setState(prevState => ({ ...prevState, members_goal: selectedOption }))
      handleNextStep()
    } else {
      if (customGoal !== '') {
        setState(prevState => ({ ...prevState, members_goal: customGoal }))
        handleNextStep()
      } else {
        toast.error('Fill the goal');
      }
    }
  }

  return (
    <div>
      <div>
        <h1 className="text-[22px] font-semibold text-center my-5">
          Members goal
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="bg-[#F5F5F5] p-5 rounded-xl flex items-center gap-4"
          onClick={() => setSelectedOption('automated')}
        >
          <Img
            src={selectedOption === 'automated' ? '/images/checkbox_black.png' : '/images/circle.png'}
            alt='logo'
            className='w-[20px] h-[20px]'
          />
          <div>
            <h3 className="font-semibold">Automated <span className="font-normal text-[12px]">(recomended)</span></h3>
            <p className="text-[10px] text-justify">
              The app sets personalized daily goals for users by analyzing their recent activity. This approach ensures that each individual faces a fair challenge tailored to their abilities and progress
            </p>
          </div>
        </div>
        <div
          className="bg-[#F5F5F5] p-5 rounded-xl flex items-center gap-4"
          onClick={() => setSelectedOption('custom')}
        >
          <Img
            src={selectedOption === 'custom' ? '/images/checkbox_black.png' : '/images/circle.png'}
            alt='logo'
            className='w-[20px] h-[20px]'
          />
          <div>
            <h3 className="font-semibold">Custom</h3>
            <div className="flex text-[10px]">
              <p className="self-end mr-4">Set a custume daily goal</p>
              <input
                className="bg-transparent border-b-[1px] border-black w-[130px] outline-none"
                type="text"
                onChange={(e) => setCustomGoal(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="absolute bottom-[55px] bg-white opacity-80 w-[250px] h-[185px]"></div>
        <Img
          src={'/images/step_challenge_screen2.png'}
          alt="step_challeng"
          width={250}
          height={650}
        />
      </div>
      <div>
        <Toaster richColors position={"top-center"} closeButton={true}/>
      </div>
      <div className="px-[20px]">
          <button
            className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            onClick={handleNextClick}
          >
            Next
          </button>
      </div>
    </div>
  );
}

export default MembersGoal;
