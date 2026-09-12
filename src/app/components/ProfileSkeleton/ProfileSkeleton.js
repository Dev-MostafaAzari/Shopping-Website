"use client";
import { motion } from "framer-motion";

const ProfileSkeleton = () => {
    return (
        <div className="flex-2 flex items-center p-[10px] lg:flex-4">
            <div className="w-full h-full flex flex-col gap-[20px] p-[10px] overflow-x-hidden overflow-y-scroll md:h-[80%] lg:scrollbar-none md:rounded-lg md:shadow-gray-300 md:shadow-md">
                <div className="w-full flex justify-center items-center p-[10px]">
                    <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-[150px] rounded-[50%]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                </div>
                <div className="w-full flex justify-right items-center text-slate-800 text-[18px] lg:text-[20px] xl:text-[22px]">
                    <p>اطلاعات حساب</p>
                </div>
                <div className="flex flex-col pt-[10px] pr-[20px] gap-[20px] text-slate-800 text-[16px] lg:text-[18px] xl:text-[20px]">
                    <div className="flex gap-[10px]">
                        <span>نام کاربری</span>
                        :
                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                    </div>
                    <div className="flex gap-[10px]">
                        <span>نام</span>
                        :
                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                    </div>
                    <div className="flex gap-[10px]">
                        <span>نام خانوادگی</span>
                        :
                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                    </div>
                    <div className="flex gap-[10px]">
                        <span>شماره موبایل</span>
                        :
                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-full" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProfileSkeleton;