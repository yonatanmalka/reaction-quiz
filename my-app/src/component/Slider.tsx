"use client"
import React from "react";
import { Img } from "@/utils/Img";

const Slider = () => {
    const cardData = [
        {
            id: 1,
            name: "Nora Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },

    ];

    return (
        <div>
            {cardData.map((card) => (
                <div key={card.id} className="w-full p-[20px] h-[180px] mt-[25px] slider">
                    <div className="flex flex-row gap-[15px] justify-start items-center">
                        <div>
                            <Img src={card.imageSrc} alt="logo" className="w-[60px] h-[60px] " />
                        </div>
                        <div className="flex flex-col ">
                            <div className="text-[12px] text-[#5B5959]  font-semibold">{card.name}</div>
                            <div className="text-[12px] text-[#5B5959]  font-semibold">{card.role}</div>
                        </div>
                    </div>
                    <div className="text-[16px] mt-[10px] text-[#000000]  font-semibold">{card.comment}</div>
                    <div className="text-[11px]  text-[#000000]  font-normal">{card.reaction}</div>
                </div>
            ))}
            <div className=" flex justify-center items-center">
                <div className="text-[32px] mt-[60px] max-w-[270px]    text-center  font-semibold">
                    100% Money Back Guarantee
                </div>

            </div>
            <div className=" flex justify-center items-center">
                <div className="text-[15px] max-w-[340px]  text-[#535353]  mt-[20px] pb-[25px]  text-center  font-normal">
                    Although we don’t think you’ll ever want one, we’ll gladly provide a refund if you request it within 7 days of your purchase
                </div>

            </div>
        </div>
    );
};

export default Slider;
