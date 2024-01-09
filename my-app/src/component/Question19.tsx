"use client"

import React, {useState} from "react";
import {Img} from "@/utils/Img";

const Question19 = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
    };

    return (
        <div>
            <div className="textDiv">
                <h1 className="text">
                    Would you like to motivate participation with rewards?
                </h1>
                <div>
                    <h1 className="text-center max-w-[350px] text-[16px] font-normal text-[#979797] mt-[15px] pb-[30px]">
                        Rewards are gift card that can be earned by employees for their achievements and are given at no
                        additional cost </h1>
                </div>
            </div>


            <div className="yesCardDiv">
                <div
                    className={`YesCard ${selectedCard === "no" ? "selected" : ""}`}
                    onClick={() => handleCardClick("no")}
                >
                    <div>
                        <Img src="/images/no.png" alt="none" className="yesNo"/>
                    </div>
                    <div className="NoText">No</div>
                </div>
                <div
                    className={`YesCard ${selectedCard === "yes" ? "selected" : ""}`}
                    onClick={() => handleCardClick("yes")}
                >
                    <div>
                        <Img src="/images/yes.png" alt="none" className="yesNo"/>
                    </div>
                    <div className="NoText">Yes</div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                <h1 className="text-center max-w-[240px] text-[18px] font-normal text-[#979797] mt-[45px]">
                    Rewards increase engagement by average X4
                     </h1>
            </div>

        </div>
    );
};

export default Question19;
