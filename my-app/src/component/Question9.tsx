"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";
interface QuestionProps {
    handleNextStep: () => void;
}
const Question9:React.FC<QuestionProps> = ({handleNextStep}) => {
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
                    Do team members actively participate and contribute?
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

export default Question9;
