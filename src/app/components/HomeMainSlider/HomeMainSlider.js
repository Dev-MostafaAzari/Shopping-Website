"use client";
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
        <div className="w-full overflow-x-hidden h-[40%] bg-gray-500 relative">
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
    );
}
 
export default HomeMainSlider;