"use client"
import React from "react";


const DownLoad_App:React.FC<any> = () => {

    return (
        <div className="w-[100%] h-[100%]">
            <div>

                <div className="flex flex-col justify-center  items-center mt-[5px]">
                    <div className='md:text-[26px] font-semibold text-[22px] mt-[30px]'>
                        You’re all set!
                    </div>
                    <div className=' text-center px-[20px]  text-[#979797] font-normal text-[14px] mt-[15px]'>
                        Click to download your new engagement app with your challenge ready to launch!
                    </div>
                    <div className="w-full mt-[10px] px-[25px] ">
                        <button  className="uppercase flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000] py-[6px]">Download App</button>
                    </div>
                    <div className=' text-center px-[20px]  text-[#343434] font-normal text-[14px] mt-[55px]'>
                        We’ve sent you an email with the login information to the admin panel
                    </div>
                </div>

            </div>


        </div>
    );
};

export default DownLoad_App;
