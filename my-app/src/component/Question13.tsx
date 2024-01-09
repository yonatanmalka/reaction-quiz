"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";

const Question13 = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (card: string | React.SetStateAction<null>) => {
        // @ts-ignore
        setSelectedCard(card);
    };

    return (
        <div>
            <div className="textDiv">
                <h1 className="texts">
                    “Team members feel comfortable expressing their thoughts and ideas openly”
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
                    <div className="NoText">Disagree</div>
                </div>
                <div
                    className={`YesCard ${selectedCard === "yes" ? "selected" : ""}`}
                    onClick={() => handleCardClick("yes")}
                >
                    <div>
                        <Img src="/images/yes.png" alt="none" className="yesNo" />
                    </div>
                    <div className="NoText">Agree</div>
                </div>
            </div>
        </div>
    );
};

export default Question13;
