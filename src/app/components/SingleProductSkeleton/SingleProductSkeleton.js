"use client";

import { motion } from "framer-motion";

const SingleProductSkeleton = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="flex-3">
                <div className="w-full h-full flex flex-col lg:flex-row p-[10px] gap-[20px]">
                    <div className="flex-1">
                        <div className="w-full h-full flex flex-col gap-[5px]">
                            <div className="flex-3 flex justify-center items-center">
                                <div className="w-[200px] lg:w-[400px] xl:w-[500px] h-full overflow-hidden">
                                    <motion.div  className={`h-full flex`}>
                                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-full h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="w-full h-full flex justify-center items-center gap-[10px] overflow-hidden">
                                    {Array.from({length:3}).map((_,index)=>(
                                        <div key={index}  className={`p-[20p] rounded-xl`}>
                                            <motion.div key={index} initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-full h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* product info */}
                    <div className="flex-1">
                        <div className="w-full h-full flex flex-col gap-[10px] xl:w-[70%] xl:gap-[15px] 2xl:w-[60%] 2xl:items-center 2xl:gap-[20px]">
                            <div className="w-full h-[100px] flex justify-right items-center text-zinc-800 text-[20px]">
                                <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[60%] h-[30%]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                            </div>
                            <div className="w-full h-[100px] flex justify-right items-center gap-[5px] text-[12px]">
                                <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[60%] h-[25%]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                            </div>
                            <div className="w-full h-[100px] flex justify-right items-center text-zinc-700 text-[20px]">
                                <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[60%] h-[20%]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SingleProductSkeleton;