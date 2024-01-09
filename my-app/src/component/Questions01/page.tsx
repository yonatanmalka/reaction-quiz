import React from "react";
import Image from "next/image";
import Background from "../../../public/images/questionbackground.jpg";

const Question1 = () => {
    return(
            <div className="Qustionaries">
                    <Image src={Background} alt={'Background'} fill={true} className="QustionariesBackground" />
                <div className="flex items-center justify-center">
                    <h1>Question no.1</h1>
                </div>
            </div>
    )
}

export default Question1;
