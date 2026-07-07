"use client";
import { faCreditCard, faHeadphones, faTruck } from "@fortawesome/free-regular-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import {useInterval} from "react-use";
import jacket from "@/app/assets/jacket2.png";
import shoes from "@/app/assets/shoes2.png";
import watch from "@/app/assets/watch.png";
import headphone from "@/app/assets/headPhone.png";
import Image from "next/image";


const HomeMainSlider = () => {
    const {width , height} = useWindowSize();
    const [delay , setDelay] = useState(3000);
    const allSlides = 4;
    const [counter , setCounter] = useState(0);
    useInterval(()=>{
            setCounter((prev) => (prev + 1) % allSlides);
    },delay)

    return (
        <div className="w-full flex flex-col gap-[10px]">
            <div className="w-full overflow-x-hidden  bg-gray-500 relative">
                <motion.div className="w-[400%] h-full bg-red-400 flex flex-row-reverse" animate={{translateX:counter*width}} transition={{duration:0.5}} onMouseOver={()=>{setDelay(null)}} onMouseLeave={()=>{setDelay(3000)}} >
                    <motion.div className="w-[100vw] h-full">
                        <div className="w-full h-full flex gap-[10px] justify-between bg-blue-300">
                            <div className="flex-1 flex justify-center items-canter">
                                <Image src={headphone} alt="headphone" quality={100} className="w-[150px] h-auto md:w-[300px] lg:w-[400px]" />  
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-[10px]">
                                <h1 className=" md:text-[25px] lg:text-[40px]">هدفون مخصوص گیمینگ</h1>
                                <p className="text-[12px]  md:text-[18px] lg:text-[25px]  text-gray-500">برای بهترین ها</p>
                                <button className=" border-solid border-1px border-black rounded-xl bg-blue-800 text-white text-[12px] p-[10px] cursor-pointer hover:text-amber-200">همین حالا خرید کن</button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                            <div className="w-full h-full flex gap-[10px] justify-between bg-amber-400">
                                <div className="flex-1 flex justify-center items-canter">
                                    <Image src={watch} alt="watch" quality={100} className="w-[150px] h-[100%] md:w-[300px] lg:w-[400px]" />  
                                </div>
                                <div className="flex-1 flex flex-col justify-center items-center gap-[10px]">
                                    <h1 className=" md:text-[25px] lg:text-[40px]">ساعت مردانه</h1>
                                    <p className="text-[12px]  md:text-[18px] lg:text-[25px]  text-gray-500">شیک و با استایل</p>
                                    <button className=" border-solid border-1px border-black rounded-xl bg-blue-800 text-white text-[12px] p-[10px] cursor-pointer hover:text-amber-200">همین حالا خرید کن</button>
                                </div>
                            </div>
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                        <div className="w-full h-full flex gap-[10px] justify-between bg-teal-600">
                            <div className="flex-1 flex justify-center items-canter">
                                <Image src={jacket} alt="watch" quality={100} className="w-[150px] h-[100%] md:w-[300px] lg:w-[400px]" />  
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-[10px]">
                                <h1 className=" md:text-[25px] lg:text-[40px]">ژاکت مردانه</h1>
                                <p className="text-[12px]  md:text-[18px] lg:text-[25px]  text-stone-300">یک انتخاب خوب برای سخت پسندان</p>
                                <button className=" border-solid border-1px border-black rounded-xl bg-blue-800 text-white text-[12px] p-[10px] cursor-pointer hover:text-amber-200">همین حالا خرید کن</button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className="w-[100vw] h-full">
                        <div className="w-full h-full flex gap-[10px] justify-between bg-rose-400">
                            <div className="flex-1 flex justify-center items-canter">
                                <Image src={shoes} alt="watch" quality={100} className="w-[150px] h-[100%] md:w-[300px] lg:w-[400px]" />  
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center gap-[10px]">
                                <h1 className=" md:text-[25px] lg:text-[40px]">کتانی مردانه </h1>
                                <p className="text-[12px] md:text-[18px] lg:text-[25px] text-stone-300">محکم و با استایل</p>
                                <button className=" border-solid border-1px border-black rounded-xl bg-blue-800 text-white text-[12px] p-[10px] cursor-pointer hover:text-amber-200">همین حالا خرید کن</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="absolute w-full h-[10px] bottom-[0px] z-[999] flex justify-center items-center gap-[5px] lg:gap-[10px] pb-[5px]">
                    <motion.div className="w-[5px] h-[5px] lg:w-[10px]  lg:h-[8px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===0 ? {background:"black",width:"15px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[5px] h-[5px] lg:w-[10px]  lg:h-[8px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===1 ? {background:"black",width:"15px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[5px] h-[5px] lg:w-[10px]  lg:h-[8px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===2 ? {background:"black",width:"15px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                    <motion.div className="w-[5px] h-[5px] lg:w-[10px]  lg:h-[8px] rounded-[50%]" initial={{background:"lightgray"}} animate={counter===3 ? {background:"black",width:"15px",borderRadius:"40%"} : {background:"lightgray"} }></motion.div>
                </div>
            </div>
            <div className="w-full  grid grid-cols-4 gap-[5px] text-gray-600">
                <div className="flex justify-center items-center gap-[5px] lg:gap-[10px]">
                    <div className=" flex justify-end items-center text-[10px] md:text-[15px] text-black">
                        <FontAwesomeIcon icon={faHeadphones}/>
                    </div>
                    <div className="flex flex-col gap justify-center items-center text-[7px] md:text-[15px]">
                        <p>پشتیبانی 24 ساعته</p>
                        <p className="text-gray-500">پاسخگوی شما </p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[5px] lg:gap-[10px]">
                    <div className="flex justify-end items-center text-[10px] md:text-[15px] text-black">
                        <FontAwesomeIcon icon={faCreditCard}/>
                    </div>
                    <div className="flex flex-col justify-center items-center text-[7px] md:text-[15px]">
                        <p>پرداخت امن</p>
                        <p className="text-gray-500">درگاه های معتبر</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[5px] lg:gap-[10px]">
                    <div className="flex justify-end items-center text-[10px] md:text-[15px] text-black">
                        <FontAwesomeIcon icon={faRefresh}/>
                    </div>
                    <div className=" flex flex-col justify-center items-center text-[7px] md:text-[15px]">
                        <p>ضمانت بازگشت کالا </p>
                        <p className="text-gray-500">تا 7 روز</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[5px] lg:gap-[10px]">
                    <div className="flex justify-end items-center text-[10px] md:text-[15px] text-black">
                        <FontAwesomeIcon icon={faTruck}/>
                    </div>
                    <div className="flex flex-col justify-center items-center text-[7px] md:text-[15px]">
                        <p>ارسال سریع</p>
                        <p className="text-gray-500">به سراسر کشور</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomeMainSlider;