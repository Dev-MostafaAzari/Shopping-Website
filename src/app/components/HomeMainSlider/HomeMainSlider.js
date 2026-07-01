"use client";
import { faCreditCard, faHeadphones, faTruck } from "@fortawesome/free-regular-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";



const HomeMainSlider = () => {
    const {width , height}= useWindowSize();
    const allSlides = 4;
    const [counter , setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => (prev + 1) % allSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    

    return (
        <div className="w-full h-[40%] flex flex-col">
            <div className="w-full overflow-x-hidden flex-3 bg-gray-500 relative">
                <motion.div className="w-[400%] h-full bg-red-400 flex flex-row-reverse" animate={{translateX:counter*width}} transition={{duration:0.5}} >
                    <motion.div className="w-[100vw] h-full">
                        item1
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                        item2
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                        item3
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                        item4
                    </motion.div>
                </motion.div>
                <div className="absolute w-full h-[10px] bottom-[0px] z-[999] flex justify-center items-center gap-[5px] pb-[5px]">
                    <motion.div className="w-[10px] h-[10px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===0 ? {background:"black",width:"25px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[10px] h-[10px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===1 ? {background:"black",width:"25px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[10px] h-[10px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===2 ? {background:"black",width:"25px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[10px] h-[10px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===3 ? {background:"black",width:"25px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                </div>
            </div>
            <div className="w-full flex-1 grid grid-cols-4 gap-[5px] text-gray-600">
                <div className="flex">
                    <div className="flex-1 flex justify-end items-center text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <FontAwesomeIcon icon={faHeadphones}/>
                    </div>
                    <div className="flex-3 flex flex-col gap justify-center items-center text-[7px] md:text-[15px] lg:text-[20px]">
                        <p>پشتیبانی 24 ساعته</p>
                        <p className="text-gray-500">پاسخگوی شما </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 flex justify-end items-center text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <FontAwesomeIcon icon={faCreditCard}/>
                    </div>
                    <div className="flex-3 flex flex-col justify-center items-center text-[7px] md:text-[15px] lg:text-[20px]">
                        <p>پرداخت امن</p>
                        <p className="text-gray-500">درگاه های معتبر</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 flex justify-end items-center text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <FontAwesomeIcon icon={faRefresh}/>
                    </div>
                    <div className="flex-3 flex flex-col justify-center items-center text-[7px] md:text-[15px] lg:text-[20px]">
                        <p>ضمانت بازگشت کالا </p>
                        <p className="text-gray-500">تا 7 روز</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1 flex justify-end items-center text-[10px] md:text-[15px] lg:text-[20px] text-black">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="flex-3 flex flex-col justify-center items-center text-[7px] md:text-[15px] lg:text-[20px]">
                        <p>ارسال سریع</p>
                        <p className="text-gray-500">به سراسر کشور</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMainSlider;