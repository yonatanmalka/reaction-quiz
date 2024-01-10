import React, {useEffect, useState} from "react";
import Image from "next/image";
import Start from "../../../images/stars.svg";

interface QuestionProps {
    handleClick: () => void;
}
const Questions20:React.FC<QuestionProps> = ({handleClick}) => {
    const [animatedPercent, setAnimatedPercent] = useState(0);

    const targetPercent = 100; // Set the target percentage
    const animationDuration = 1000; // Set the duration of the animation in milliseconds
    const radius = 50;
    const strokeWidth = 7;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (animatedPercent / 100) * circumference;
    const rotationAngle = 270;

    useEffect(() => {
        let startTimestamp: number;

        const animate = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = timestamp - startTimestamp;
            const percentage = Math.min((progress / animationDuration) * 100, targetPercent);

            setAnimatedPercent(percentage);

            if (progress < animationDuration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [targetPercent, animationDuration]);


    return(
        <div>
            <div className="flex items-center justify-center mt-[10px]">
                <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    {/* Background circle */}
                    <circle cx="60" cy="60" r={radius} fill="none" stroke="#E1E1E1" strokeWidth={strokeWidth} />
                    {/* Filled progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        fill="none"
                        stroke="#5553FE"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(${rotationAngle} 60 60)`}
                    />
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="20" fill="#000" className="font-bold">
                        {`${Math.round(animatedPercent)}%`}
                    </text>
                </svg>
            </div>
            <p className="text-[#343434] font-medium text-[12px] text-center">Creating your challenge...</p>
            <div className="mt-[15px]">
                <p className="text-[#5553FE] font-bold text-[14px] text-center">5,000+ Companies</p>
                <p className="text-[#343434] font-bold text-[12px] text-center">have chosen Reaction</p>
            </div>
            <div className="w-[305px] mt-[8px] box-shadow py-[20px] px-[15px] rounded-[14px]">
                <Image src={Start} alt={'Logo'} width={100} height={44} className="ml-[-10px]"/>
                <div className="flex flex-row justify-between items-center">
                    <span className="text-[#000] font-semibold text-[12px] ">This platform is amazing!</span>
                    <span className="text-[#5B5959] font-medium text-[12px] ">David Alexander</span>
                </div>
                <p className="text-[#000] font-normal text-[12px] mt-[5px]">
                    Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad
                </p>
            </div>
            <button onClick={handleClick} className="uppercase h-[40px] flex items-center justify-center mt-[12px] bg-[#F9B22D] w-[100%] rounded-[24px] text-[14px] font-semibold leading-10 tracking-tight text-[#000]">
                Next
            </button>
        </div>
    )
}

export default Questions20;
