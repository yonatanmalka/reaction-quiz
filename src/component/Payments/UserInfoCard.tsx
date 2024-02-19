"use client"

import { Img } from "@/utils/Img";

function UserInfoCard({ heading, img, text }: { heading: string, img: string, text: string}) {
  return (
    <div className='flex justify-center items-center gap-[8px] flex-row'>
        <div className='h-[34px] w-[34px] bg-[#DADADA] flex items-center justify-center rounded-full'>
            <Img
              src={img}
              alt='logo'
              className='w-[18px] h-[18px]'
            />
        </div>
        <div className='flex flex-col'>
          <div className='text-[13px] font-normal text-[#979797]'>
              {heading}
          </div>
          <div className='text-[12px] font-medium text-[#343434]'>
              {text}
          </div>
        </div>
    </div>
  );
}

export default UserInfoCard;
