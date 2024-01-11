import React, { useState, useEffect } from "react";

interface QuestionProps {
    handleNextStep: () => void;
}

const Questions15: React.FC<QuestionProps> = ({ handleNextStep }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prevPercent) => {
                const nextPercent = prevPercent + 1;
                if (nextPercent === 100) {
                    clearInterval(interval); // Stop the interval when percent reaches 100
                    setTimeout(handleNextStep, 2000); // Call handleNextStep after 2 seconds
                }
                return nextPercent;
            });
        }, 30); // Adjust the interval duration for smoother animation
        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [handleNextStep]);

    return (
        <div className="flex mt-[60px] flex-col gap-[20px] justify-center items-center">
            <div className="text-[14px] text-[#343434] font-bold mt-[-10px]">
                Analysing team’s engagement score...
            </div>
            <div className="w-[100%] mt-[10px]">
                <h1 className="text-center mb-[5px] text-[#343434] font-bold text-[20px] md:text-[22px]">
                    {percent}%
                </h1>
                <div
                    className="w-[100%] bg-[#E1E1E1] h-[5px] md:h-[8px] rounded-md overflow-hidden"
                    style={{ borderRadius: "5px" }}
                >
                    <div
                        className="bg-[#5553FE] h-full transition-all"
                        style={{
                            width: `${percent}%`,
                            borderRadius: "5px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Questions15;
