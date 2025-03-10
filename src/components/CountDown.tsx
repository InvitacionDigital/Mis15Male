import React from "react";
import { useState } from "react";

function Timer() {
        const [dayy, setDayy] = useState(0);
        const [hourr, setHourr] = useState(0);
        const [secondd, setSecondd] = useState(0);
        const [minutee, setMinutee] = useState(0);


        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        const birthday = "03/29/2025 21:00:00";
        const countDown = new Date(birthday).getTime();

        const x = setInterval(() => {    
    
            setDayy(Math.floor((countDown - Date.now()) / (day)))
            setHourr(Math.floor(((countDown - Date.now()) % (day)) / (hour)))
            setMinutee(Math.floor(((countDown - Date.now()) % (hour)) / (minute)))
            setSecondd(Math.floor(((countDown - Date.now()) % (minute)) / second))
    
            //do something later when date is reached
            if ((countDown - Date.now()) < 0) {
            clearInterval(x);
            }
            //seconds
        }, 1000);

    return (
        <div className= "w-full h-96 relative my-14 flex flex-col justify-center gap-8 font-[poppins] text-primary bg-[url('/circulo3.svg')] bg-no-repeat bg-contain bg-center">
            <h2 className="font-semibold text-6xl text-center font-dance">Faltan</h2>
            <div className="flex justify-evenly gap-2 text-4xl mx-auto relative w-[full] max-w-[522px]">
                <div className="flex-col items-center flex min-w-12">
                    <p id="days" className="text-center font-light">{dayy}</p>
                    <p className="text-sm">Días</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="hours" className="text-center font-light">{hourr}</p>
                    <p className="text-sm">Hs</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="minutes" className="text-center font-light">{minutee}</p>
                    <p className="text-sm">Min</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="seconds" className="text-center font-light">{secondd}</p>
                    <p className="text-sm">Seg</p>
                </div>
            </div>
        </div>

    )
}

export default Timer;