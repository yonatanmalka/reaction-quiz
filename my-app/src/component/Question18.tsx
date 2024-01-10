"use client";
import React, { useState } from "react";
import { Img } from "@/utils/Img";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface QuestionProps {
    handleClick: () => void;
}

const Question18: React.FC<QuestionProps> = ({ handleClick }) => {
    const [firstName, setFirstName] = useState("");
    const today = new Date();

    const [selectedDate, setSelectedDate] = useState([
        {
            startDate: today,
            endDate: null as Date | null,
            key: "selection",
        },
    ]);

    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

    const handleDateChange = (ranges: any) => {
        setSelectedDate([ranges.selection]);
    };

    return (
        <div className="px-[15px] mt-[50px]">
            <div className="flex justify-center items-center">
                <h1 className="text-[25px] font-semibold text-center">
                    Let’s create a step challenge!
                </h1>
            </div>
            <div className="w-full flex gap-[10px] mt-[20px] flex-col">
                <div className="w-[100%]">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Challenge title (optional)"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 p-2 border bg-[#EFF3F6]  border-[#EFF3F6] rounded-md w-full"
                    />
                </div>
                <div
                    className="mt-1 p-2 border bg-[#EFF3F6] h-[40px]  items-center flex flex-row border-[#EFF3F6] rounded-md w-full"
                    onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                >
                    <div>
                        <Img src="/images/clock1.png" alt="none" className="w-[20px] h-[20px]" />
                    </div>
                    <div className="text-[14px] ml-[10px] cursor-pointer">
                        {selectedDate[0].startDate.toLocaleDateString()} -{" "}
                        {selectedDate[0].endDate ? selectedDate[0].endDate.toLocaleDateString() : "Select end date"}

                    </div>
                </div>
                {isDatePickerOpen && (

                        <DateRangePicker
                            ranges={selectedDate}
                            onChange={handleDateChange}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={1}
                            direction="horizontal"
                            staticRanges={[]}
                            minDate={today}
                        />

                )}
            </div>
            <div className="mt-[]">
                <button
                    onClick={handleClick}
                    className="uppercase text-[#000] mt-[14px] md:mt-[20px] py-[8px] md:py-[12px] flex items-center justify-center bg-[#F9B22D] rounded-[32px] w-[100%] font-bold text-[14px]"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Question18;
