"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";


const motionVariant = {
    initial:{
        display:"none",
        scale:0.3,
        transformOrigin:"top right",
    },
    animate:{
        display:"flex",
        scale:1,
    },
    transition:{
        duration:0.5,
        type:"spring",
    }
}

const SubNavbar = () => {
    
    const [isHovered , setIsHovered] = useState(false);
    const [isSection , setIsSection] = useState(false);
    const [clothes , setClothes]  = useState(false);
    const [digital , setDigital]  = useState(false);
    const [valubles , setValubles]  = useState(false);
    const ClothesSec = () =>{
        setDigital(false);
        setValubles(false);
        setClothes(true);
    };
    const ValublesSec = () =>{
        setDigital(false);
        setValubles(true);
        setClothes(false);
    };
    const DigitalSec = () =>{
        setDigital(true);
        setValubles(false);
        setClothes(false);
    };

    return (
        <div className="w-screen h-[100px] hidden md:flex justify-right items-center gap-[70px] pr-[100px] text-gray-600 relative">
            <div><Link href={"/"} className="hover:text-gray-800">خانه</Link></div>
            <div onMouseEnter={()=>{setIsHovered(true)}}>
                <Link href={"/"} className="hover:text-gray-800">دسته بندی ها</Link>
                <motion.div onMouseLeave={()=>{setIsHovered(false);setIsSection(false);}} variants={motionVariant} initial={"initial"} animate={isHovered ? "animate" : "initial"} transition={"transition"} className={`absolute bg-white z-[999] flex-col gap-[10px] mt-[20px] p-[10px] border-solid border-gray-300 border-[1px] rounded-lg shadow-gray-400 shadow-sm`}>
                    <motion.div className="flex flex-row gap-[10px]">
                        <motion.div className="flex flex-col gap-[10px]">
                            <div onMouseEnter={()=>{ClothesSec();setIsSection(true)}} className="w-full"><Link className="hover:text-gray-800" href={"/"}>پوشاک</Link></div>
                            <div onMouseEnter={()=>{DigitalSec();setIsSection(true)}} className="w-full"><Link className="hover:text-gray-800" href={"/"}>دیجیتال</Link></div>
                            <div onMouseEnter={()=>{ValublesSec();setIsSection(true)}} className="w-full"><Link className="hover:text-gray-800" href={"/"}>زیورآلات</Link></div>
                        </motion.div>
                        <motion.div className={`w-[200px] justify-center h-full ${isSection ? "flex" : "hidden"}`}>
                            {clothes ? (<div className="flex flex-col gap-[10px]">
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>ژاکت</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>کفش</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>کلاه</Link></div>
                            </div>) : null}
                            {digital ? (<div className="flex flex-col gap-[10px]">
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>موبایل</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>کارت حافظه</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>ساعت</Link></div>
                            </div>) : null}
                            {valubles ? (<div className="flex flex-col gap-[10px]">
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>دست بند</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>انگشتر</Link></div>
                                <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>گردن بند</Link></div>
                            </div>) : null}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <div><Link href={"/"} className="hover:text-gray-800">وبلاگ</Link></div>
            <div><Link href={"/"} className="hover:text-gray-800">درباره ما</Link></div>
        </div>
    );
}
 
export default SubNavbar;