"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
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

        {
            id: 2,
            name: "Naira Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },
        {
            id: 3,
            name: "Sania Davis",
            role: "Manager",
            comment: "This platform is amazing!",
            reaction:
                "Reaction is ad Reaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is adReaction is ad",
            imageSrc: "/images/review.png",
        },
    ];

    return (
        <div className="px-[20px]">
            <div>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {cardData.map((card,index) => (
                        <SwiperSlide key={index}>
                            <div  className="w-full border-2 rounded-[12px] p-[20px]  h-[200px] mt-[25px]">
                                <div className="flex flex-row gap-[15px] justify-start items-center">
                                    <div>
                                        <Img src={card.imageSrc} alt="logo" className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] " />
                                    </div>
                                    <div className="flex flex-col ">
                                        <div className="text-[10px] md:text-[12px] text-[#5B5959]  font-semibold">{card.name}</div>
                                        <div className="text-[10px] text-[#5B5959]  font-semibold">{card.role}</div>
                                    </div>
                                </div>
                                <div className="text-[12px] md:text-[16px] mt-[10px] mb-[4px] text-[#000000]  font-semibold">{card.comment}</div>
                                <div className="text-[11px] md:text-[11px]  text-[#000000]  font-normal">{card.reaction}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;