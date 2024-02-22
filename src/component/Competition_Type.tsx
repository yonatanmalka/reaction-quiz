"use client"

import { AppContext } from "@/utils/ContextProvider";
import { Img } from "@/utils/Img";
import { useContext, useState } from "react";

function CompetitionType({ handleNextStep } : { handleNextStep: () => void }) {

  const { setState } = useContext(AppContext)
  const [selectedOption, setSelectedOption] = useState("individuals")

  const handleNextClick = () => {
    setState(prevState => ({ ...prevState, competition_type: selectedOption }))
    handleNextStep()
  }

  return (
    <div>
      <div>
        <h1 className="text-[22px] font-semibold text-center my-7">
          Competition type
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="bg-[#F5F5F5] p-5 rounded-xl flex items-center gap-4"
          onClick={() => setSelectedOption('individuals')}
        >
          <Img
            src={selectedOption === 'individuals' ? '/images/checkbox_black.png' : '/images/circle.png'}
            alt='logo'
            className='w-[20px] h-[20px]'
          />
          <div>
            <h3 className="font-semibold">Individuals <span className="font-normal text-[12px]">(recomended)</span></h3>
            <p className="text-[10px]">Participants compete for the highest step count</p>
          </div>
        </div>
        <div
          className="bg-[#F5F5F5] p-5 rounded-xl flex items-center gap-4"
          onClick={() => setSelectedOption('teams')}
        >
          <Img
            src={selectedOption === 'teams' ? '/images/checkbox_black.png' : '/images/circle.png'}
            alt='logo'
            className='w-[20px] h-[20px]'
          />
          <div>
            <h3 className="font-semibold">Individuals & teams</h3>
            <p className="text-[10px]">Select to add teams</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 relative">
        {selectedOption === 'teams' && <div className="absolute bg-white opacity-80 w-[250px] h-[260px]"></div>}
        <Img
          src={selectedOption === 'individuals' ? '/images/step_challenge_screen1.png' : '/images/step_challenge_screen2.png'}
          alt="step_challeng"
          width={250}
          height={650}
        />
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

export default CompetitionType;
