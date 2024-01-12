"use client";
import React, { useState, useEffect } from "react";
import { Img } from "@/utils/Img";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Range } from "react-date-range";
import { Toaster, toast } from 'sonner';

interface QuestionProps {
    handleClick: () => void;
    setData:any;
}

const Question18: React.FC<QuestionProps> = ({handleClick, setData }) => {
    const [firstName, setFirstName] = useState("");

    const today = new Date();

    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: today,
            endDate: undefined as Date | undefined, // explicitly provide the type here
            key: "selection",
        },
    ]);


    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const handleDateChange = (ranges: any) => {
        setSelectedDate([ranges.selection]);
    };

    const handleOutsideClick = (e: MouseEvent) => {
        const dateRangePickerContainer = document.querySelector(".rdrDateRangeWrapper");

        if (
            dateRangePickerContainer &&
            !dateRangePickerContainer.contains(e.target as Node) &&
            isDatePickerOpen
        ) {
            setIsDatePickerOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isDatePickerOpen]);

    const handleNextClick = () => {
        if (firstName && selectedDate[0].startDate && selectedDate[0].endDate) {
            const data = {
                Challenge_title: firstName,
                selectedDate: selectedDate,
            };
            setData(data);
            handleClick();
            toast.success('Saving Your Details');
        } else if(firstName === "") {
            toast.error('Write Challenge title');
        } else if (selectedDate[0].endDate === undefined) {
            toast.error('Select End Date')
        } else (
            toast.error('Fill all the details')
        )
    };

    return (
        <div className="mt-[30px] relative">
            <div className="flex justify-center items-center">
                <h1 className="md:text-[26px] text-[22px] font-semibold text-center">
                    Let’s create a step challenge!
                </h1>
            </div>
            <div className="w-full  px-[20px]  flex gap-[10px] mt-[30px] flex-col">
                <div className="w-[100%]">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Challenge title"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 p-2 border bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                    />
                </div>
                <div
                    className="mt-1 p-2  border bg-[#EFF3F6] h-[40px]  items-center flex flex-row border-[#EFF3F6] rounded-md w-full"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                >
                    <div>
                        <Img src="/images/clock1.png" alt="none" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="text-[14px] ml-[10px] cursor-pointer">
                        {selectedDate[0].startDate.toLocaleDateString()} -{" "}
                        {selectedDate[0].endDate !== undefined
                            ? selectedDate[0].endDate?.toLocaleDateString() || "Select end date"
                            : "Select end date"}

                    </div>
                </div>
            </div>
            <div>
                <Toaster richColors position={"top-center"} closeButton={true}/>
            </div>
            <div className="mt-[154px] px-[20px] ">
                <button
                    onClick={handleNextClick}
                    className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[8px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
                >
                    Next
                </button>
            </div>
            {isDatePickerOpen && (
                <div className="absolute top-[5px] right-[15px]">
                    <DateRangePicker
                        ranges={selectedDate as Range[]}
                        onChange={handleDateChange}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        direction="horizontal"
                        staticRanges={[]}
                        minDate={today}
                    />
                </div>
            )}
        </div>
    );
};

export default Question18;
