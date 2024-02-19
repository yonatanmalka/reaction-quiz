"use client"

import { Img } from "@/utils/Img";

export const list = [
  { name: 'Step challenge designed for your team' },
  { name: 'No wearables required' },
  { name: 'Easy to use app' },
  { name: 'Admin dashboard & analytics' },
  { name: 'VIP customer support' }
]

function Advanteges() {
  return (
    <>
      <div className='md:text-[26px]  text-center font-semibold text-[22px] mt-[15px] pb-[10px]'>
        What you get
      </div>
      <div className='flex flex-col  gap-[10px] px-[20px] justify-start items-start'>
        {list.map((item, index) => (
          <div
            key={index}
            className='flex flex-row justify-start items-center'
          >
            <div>
              <Img
                src='/images/Ok.png'
                alt='logo'
                className='w-[30px] h-[30px] '
              />
            </div>
            <div className="md:text-[14px] w-[275px] md:w-[330px] text-[12px]  ml-[15px]">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Advanteges;
