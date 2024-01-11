"use client"
import React, {useState} from "react";
import {Img} from "@/utils/Img";
import Slider from "@/component/Slider";
import SliderComp from "@/component/Slider";
import Timer from "@/component/Timer";
import Logo from "../../images/logo.svg";
import {BarChart} from "@/component/chats";
import LineGraph from "../../images/linegraph.svg"



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
                        <button  className="uppercase  h-[40px] flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[12px] md:text-[16px] font-semibold leading-10 tracking-tight text-[#000]">Download App</button>
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
