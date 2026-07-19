"use client";
import { motion } from "framer-motion";

const ProductsSkeleton = () =>{
    return (
        <div className="w-full h-full">
            <div className="w-full h-full p-[10px]">
                <div className="w-full h-full rounded-md shadow-sm shadow-zinc-400 p-[10px] flex flex-col gap-[10px]">
                    <div className="w-full flex justify-right items-center p-[10px]">
                        <h1 className="text-slate-600 text-[20px]">لیست محصولات</h1>
                    </div>
                    <div className="w-full h-full overflow-y-scroll scrollbar-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-[350px] gap-[10px]">
                        {Array.from({length:15}).map((_,index)=>{
                            return (
                                <div key={index} className="h-full w-full p-[10px]">
                                    <div className="w-full h-full flex flex-col justify-center items-center shadow-sm shadow-zinc-400 rounded-xl">
                                        <div className="w-full flex-1 flex justify-center items-center p-[10px]">
                                            <motion.div key={index} initial={{background:"linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)",backgroundSize: "250% 100%"}} className="w-[80%] h-full" animate={{backgroundPosition:["0% 50%","100% 50%"]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}></motion.div>
                                        </div>
                                        <div className="w-full flex flex-1 flex-col justify-center items-center p-[10px] gap-[10px]">
                                            <div className="w-full flex flex-1 justify-end items-center">
                                                <motion.div key={index} initial={{background:"linear-gradient(110deg ,#a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)",backgroundSize: "250% 100%"}} className="w-[30%] h-full" animate={{backgroundPosition:["0% 50%","100% 50%"]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}></motion.div>
                                            </div>
                                            <div className="w-full flex flex-1 justify-end items-center">
                                                <motion.div key={index} initial={{background:"linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)",backgroundSize: "250% 100%"}} className="w-[60%] h-full" animate={{backgroundPosition:["0% 50%","100% 50%"]}} transition={{duration:2,repeat:Infinity,ease:"linear"}}></motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductsSkeleton;