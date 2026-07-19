"use client";

import { useState } from "react";
import { useInterval } from "react-use";


const CountDown = () => {
    const [time , setTime] = useState(10000); //10000seconds
    const [hour , setHour] = useState(Math.floor(time/3600));
    const [minute , setMinute] = useState(Math.floor((time - (hour*3600))/60));
    const [seconds , setSeconds] = useState(Math.floor(((time - (hour*3600))-(minute*60))/60));
    const delay = 1000;
    useInterval(()=>{
        if(seconds === 0)
        {
        
           {minute === 0 ? (hour !=0 ? (setHour(prev => prev-1),setMinute(60)) : null) : (setMinute(prev => prev-1),setSeconds(60))}
            
        }else 
        {
            setSeconds(prev=>prev-1)
        }
    },delay)

    return (
        <div className="grid grid-cols-3 gap-[3px] text-[16px] text-white">
            <div className="flex flex-col rounded-md bg-sky-700 gap-[2px] justify-center items-center p-[5px]">
                <p>{seconds}</p>
                <p>ثانیه</p>
            </div>
            <div className="flex flex-col rounded-md bg-sky-700 gap-[2px] justify-center items-center p-[5px]">
                <p>{minute}</p>
                <p>دقیقه</p>
            </div>
            <div className="flex flex-col rounded-md bg-sky-700 gap-[2px] justify-center items-center p-[5px]">
                <p>{hour}</p>
                <p>ساعت</p>
            </div>
        </div>
    );
}
 
export default CountDown;