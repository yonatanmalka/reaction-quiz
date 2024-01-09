import React, { useState, useEffect } from "react";

const Timer = () => {
    const [timeRemaining, setTimeRemaining] = useState(599); // 9 minutes and 59 seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(intervalId);
                    // Perform any action when the timer reaches 0
                    // For example, you can display a message or trigger some other functionality.
                    return 0;
                }
            });
        }, 1000); // Update every second

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once on mount

    // Convert remaining time to minutes and seconds
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="w-full bg-[#F9B22D] flex justify-center items-center h-[25px]">
            <h1 className="text-white font-bold">
                Reserved price for : {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </h1>
        </div>
    );
};

export default Timer;
