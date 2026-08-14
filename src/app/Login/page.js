"use client";

import { motion } from "framer-motion";

const LoginPage = () => {
    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-[80%] flex justify-center items-center">
                <div className="min-w-[300px] min-h-[250px] flex flex-col justify-center items-center gap-[10px] p-[10px] bg-stone-50 rounded-md shadow-gray-400 shadow-md md:min-w-[400px] md:min-w-[350px]">
                    <h1 className="text-[20px] text-slate-600">ورود به حساب</h1>
                    <form className="w-full flex flex-col justify-center items-center gap-[20px] p-[5px]" dir="ltr">
                        <input type="text" className="w-full border-gray-300 border-solid border-[1px] rounded-xl p-[10px]" placeholder="نام کاربری"/>
                        <input type="password" className="w-full border-gray-300 border-solid border-[1px] rounded-xl p-[10px]" placeholder="رمز عبور"/>
                        <motion.button initial={{backgroundColor:"#3e40be"}} whileHover={{backgroundColor:"#121358"}} transition={{duration:0.3}}
                            className="w-[100px] cursor-pointer p-[10px] text-white rounded-xl" type="submit">ورود</motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default LoginPage;