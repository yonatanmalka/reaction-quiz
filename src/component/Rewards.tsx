import { AppContext } from "@/utils/ContextProvider";
import { Img } from "@/utils/Img";
import { useContext } from "react";

function Rewards () {

  const { handleNextStep } = useContext(AppContext)

  return (
    <div>
      <div className="mb-16">
        <h1 className="text-[22px] font-semibold text-center my-7 flex flex-col gap-1">
          Rewards
          <p className="text-[18px] text-[#5553FE]">Up to 4x Engagement</p>
          <p className="text-[14px] text-[#979797] font-normal">Participants can redeem their points <br/>for gift cards and donation</p>
        </h1>
      </div>
      <div className="mb-10">
          <Img
            src={'/images/rewards.png'}
            alt="step_challeng"
            width={650}
            height={550}
            className="scale-110"
          />
      </div>
      <div className="px-[20px]">
          <button
            className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
            onClick={handleNextStep}
          >
            Next
          </button>
      </div>
    </div>
  );
}

export default Rewards;
