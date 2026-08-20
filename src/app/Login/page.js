"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/features/authenticationSlice";
import { useRouter } from "next/navigation";
import CircleLoading from "../components/CircleLoading/CircleLoading";


const LoginPage = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const {userLogedIn,loading} = useSelector(state => state.AuthenticationUser);
    const router = useRouter();


    useEffect(()=>{
        if(userLogedIn === true){
            setTimeout(()=>{
                router.push("/");
            },3000)
        }
    },[userLogedIn])

    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
                <div className={`min-w-[300px] min-h-[250px] flex flex-col justify-center items-center gap-[10px] p-[10px] bg-stone-50 rounded-md shadow-gray-400 shadow-md md:min-w-[400px] md:min-h-[350px] relative`}>
                    <div className={`${loading ? "blur-sm" : ""} w-full h-full flex flex-col justify-center items-center gap-[10px]`}>
                        <h1 className="text-[20px] text-slate-600">ورود به حساب</h1>
                        <form onSubmit={(e)=>{e.preventDefault();dispatch(loginUser({username:userName,password:password}))}} className="w-full flex flex-col justify-center items-center gap-[20px] p-[5px]" dir="ltr">
                            <input value={userName} onChange={(e)=>{setUserName(e.target.value)}} type="text" className="w-full border-gray-300 border-solid border-[1px] rounded-xl p-[10px]" required placeholder="نام کاربری"/>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="w-full border-gray-300 border-solid border-[1px] rounded-xl p-[10px]" required placeholder="رمز عبور"/>
                            <motion.button initial={{backgroundColor:"#3e40be"}} whileHover={{backgroundColor:"#121358"}} transition={{duration:0.3}}
                                className="w-[100px] cursor-pointer p-[10px] text-white rounded-xl" type="submit">ورود</motion.button>
                        </form>
                    </div>
                    {loading ? 
                        <div className="absolute flex flex-col justify-center items-center min-w-[300px] min-h-[250px] md:min-w-[400px] md:min-w-[350px]">
                            <CircleLoading/>
                        </div>
                        :
                        null
                    }
                </div>
                <motion.div className="flex flex-col min-w-[300px]  p-[10px] gap-[20px] bg-slate-200 rounded-xl text-gray-500 md:min-w-[400px]">
                    <p className="w-full text-center text-gray-800">برای ورود از نام کاربری و رمز زیر استفاده کنید</p>
                    <p>نام کاربری : emilys</p>
                    <p>رمز عبور : emilyspass</p>
                </motion.div>
            </div>
        </div>
    );
}
 
export default LoginPage;