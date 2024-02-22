import { Img } from "@/utils/Img";

function Inclusivity ({ handleNextStep } : { handleNextStep: () => void }) {
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-[22px] font-semibold text-center my-7 flex flex-col gap-1">
          Inclusivity
          <p className="text-[14px] text-[#979797] font-normal">
            Participants can add activity manually. This will <br />not convert to steps but provide them with <br /> points for rewards so everyone can take part in <br /> the challenge
          </p>
        </h1>
      </div>
      <div className="mb-5 flex justify-center relative">
          <div className="absolute bg-white opacity-80 w-[250px] h-[365px]"></div>
          <div className="absolute bottom-0 bg-white opacity-80 w-[250px] h-[55px]"></div>
          <Img
            src={'/images/inclusivity.png'}
            alt="step_challeng"
            width={250}
            height={600}
          />
          <p className="absolute bottom-[75px] left-[95px] text-[12px] font-bold">
            Add activity manually
          </p>
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

export default Inclusivity;
