"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";

const Question11 = ({handleNextStep}) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
        handleNextStep();
    };

    return (
        <div>
            <div className="textDiv">
                <h1 className="texts">
                    Do team members often experience high levels of stress at work?
                </h1>
            </div>
            <div className="yesCardDiv">
                <div
                    className={`YesCard ${selectedCard === "no" ? "selected" : ""}`}
                    onClick={() => handleCardClick("no")}
                >
                    <div>
                        <Img src="/images/no.png" alt="none" className="yesNo" />
                    </div>
                    <div className="NoText">No</div>
                </div>
                <div
                    className={`YesCard ${selectedCard === "yes" ? "selected" : ""}`}
                    onClick={() => handleCardClick("yes")}
                >
                    <div>
                        <Img src="/images/yes.png" alt="none" className="yesNo" />
                    </div>
                    <div className="NoText">Yes</div>
                </div>
            </div>
        </div>
    );
};

export default Question11;
