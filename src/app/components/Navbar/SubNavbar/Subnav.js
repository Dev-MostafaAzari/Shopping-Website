"use client";
import Link from "next/link";
import { useState } from "react";

const SubNavbar = () => {
    
    const [isHovered , setIsHovered]=useState(false);

    return (
        <div className="w-screen h-[100px] hidden md:flex justify-right items-center gap-[70px] pr-[100px] text-gray-600 relative">
            <div><Link href={"/"} className="hover:text-gray-800">خانه</Link></div>
            <div onMouseEnter={()=>{setIsHovered(true)}}>
                <Link href={"/"} className="hover:text-gray-800">دسته بندی ها</Link>
                <div onMouseLeave={()=>{setIsHovered(false)}} className={`absolute bg-white w-[150px] h-[200px] flex-col gap-[10px] mt-[20px] p-[10px] border-solid border-gray-300 border-[1px] rounded-lg shadow-gray-400 shadow-sm ${isHovered ? "flex" : "hidden"}`}>
                    <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>لباس</Link></div>
                    <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>لباس</Link></div>
                    <div className="w-full"><Link className="hover:text-gray-800" href={"/"}>لباس</Link></div>
                </div>
            </div>
            <div><Link href={"/"} className="hover:text-gray-800">وبلاگ</Link></div>
            <div><Link href={"/"} className="hover:text-gray-800">درباره ما</Link></div>
        </div>
    );
}
 
export default SubNavbar;