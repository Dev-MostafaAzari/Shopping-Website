"use client";

import { motion } from "framer-motion";

const CircleLoading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center relative">
            <motion.div initial={{rotate:"0deg"}} animate={{rotate:"360deg"}} transition={{type:"spring",repeat:Infinity,damping:30}} style={{clipPath:"polygon(50% 0% , 100% 0% , 100% 50% , 50% 50%)"}} className="w-[50px] h-[50px] bg-blue-600 rounded-[50%]"></motion.div>
            <div className="absolute w-[40px] h-[40px] bg-white rounded-[50%]"></div>
        </div>
    );
}
 
export default CircleLoading;