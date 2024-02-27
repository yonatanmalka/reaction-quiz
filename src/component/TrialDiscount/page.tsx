"use client"

import Switch from "react-switch";
import React, {useContext, useEffect, useState} from "react";
import { Img } from "@/utils/Img";
import { createCustomer } from "@/utils/customer.io";
import { AppContext } from "@/utils/ContextProvider";
import Link from "next/link";

const list = [
  { name: "Unlock all challenge features" },
  { name: "Start with your personal card, then easily switch to company billing in the admin dashboard" },
  { name: "We'll send you an invoice for seamless expense reporting" }
]

const TrialDiscount = () => {

  const [checked, setChecked] = useState(true);
  const { state, setState } = useContext(AppContext)

  useEffect(() =>  {
    createCustomer(state)
  }, [])

  const handleChange = async (checked: boolean) => {
    setChecked(checked);
    setState(prevState => ({ ...prevState, trial_discount: checked }))
  };

  return (
    <div className="p-7 md:p-0">
      <h1 className="text-[22px] md:text-[26px] hy text-[#000] text-center font-semibold mt-[40px]">Test before you launch!</h1>
      <p className="mt-[32px] text-[12px] font-normal text-center px-[15px]">Test the challenge with <b>5 users</b> <br />colleagues before making a decision</p>
      <div className="w-full h-[45px] md:h-[60px] px-[20px] flex flex-row justify-between items-center mt-[25px] bg-[#EFF1F4] rounded-md">
        <div className="text-[14px] md:text-[18px] font-normal text-[#343434]">Unlock trial discount</div>
        <div className="mt-[7px] relative z-10  ">
          <label>
            <Switch
                onChange={handleChange}
                checked={checked}
                onColor="#37B659"
                onHandleColor="#fff"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={22}
                width={50}
                className="react-switch"
            />
          </label>
        </div>
      </div>
      <div className='flex flex-col gap-[25px] justify-start items-start mt-[45px]'>
        {list.map((item,index) => (
          <div
              key={index}
              className='flex justify-start items-center'>
              <div>
                  <Img src='/images/Ok.png' alt='logo'
                    className='w-[33px] h-[30px] '/>
              </div>
              <div className="md:text-[14px] w-[275px] md:w-[370px]  text-[12px]  ml-[15px] ">
                  {item.name}
              </div>
          </div>
        ))}
      </div>
      <Link href={`${process.env.NEXT_PUBLIC_URL}/payment?email=${state.admin_detail.email}`}>
        <button
          className="flex items-center justify-center bg-[#F9B22D] w-[100%] rounded-[24px] text-[14px] md:text-[18px] font-semibold leading-10 tracking-tight text-[#000] py-[6px] mt-[140px]">
          Confirm
        </button>
      </Link>
    </div>
  )
}

export default TrialDiscount
