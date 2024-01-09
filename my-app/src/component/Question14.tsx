"use client"

import React, { useState } from "react";
import { Img } from "@/utils/Img";

const Question14 = () => {
    const areasToImprove = [
        { title: "Communication" },
        { title: "Collaboration" },
        { title: "Time Management" },
        { title: "Time Management" },
        { title: "Time Management" },
        { title: "Time Management" }, { title: "Time Management" },
        { title: "Time Management" },
        // Add more items as needed
    ];

    const [selected, setSelected] = useState([]);

    const handleCardClick = (index) => {
        const newSelected = [...selected];
        const selectedIndex = newSelected.indexOf(index);

        if (selectedIndex === -1) {
            newSelected.push(index);
        } else {
            newSelected.splice(selectedIndex, 1);
        }

        setSelected(newSelected);
    };

    return (
        <div className="textDiv">
            <div className="textDiv">
                <h1 className="text">
                    Select up to three areas where you believe the team could improve the most
                </h1>
            </div>
            <div className="slider-container mt-[10px] px-[40px] w-full">
                <div className="card-slider w-full">
                    {areasToImprove.map((area, index) => (
                        <div
                            key={index}
                            className={`card2 ${selected.includes(index) ? 'selected' : ''}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <h1 className="text-[#343434] font-semibold text-[22px]">
                                {area.title}
                            </h1>
                            {selected.includes(index) && (
                                <div className="TickImage">
                                    <Img src="/images/Ok.png" alt="none" className="w-[35px] h-[35px]" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full px-[40px] ">
                <button className="ButtonContainer">Next</button>
            </div>
        </div>
    );
};

export default Question14;
