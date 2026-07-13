"use client";

import { faArrowLeft, faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/app/redux/features/filterSlice";
import Link from "next/link";

const ProductsFilter = () => {
    const {filterShow} = useSelector(state => state.filteProduct);
    const dispatch = useDispatch();
    const [selectedCategory , setSelectedCategory]=useState(null);
    const categoryList = [{title:"لباس",id:1},{title:"ساعت مردانه",id:2},{title:"کفش",id:3},{title:"گوشی",id:4}];

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-full hidden lg:flex">

                </div>
                <div className="w-full h-full flex  justify-right items-center lg:hidden">
                    <button onClick={()=>{dispatch(toggleFilter());setSelectedCategory(null)}} className="mr-[5px] text-gray-600 font-thin text-[12px] border-[1px] border-solid border-gray-300 p-[5px] rounded-sm"><FontAwesomeIcon icon={faFilter}/>فیلترها</button>
                    <motion.div initial={{opacity:0,display:"none"}} animate={filterShow ? {opacity:1,display:"flex"} : {opacity:0,display:"none"}} transition={{duration:0.3}} className="w-full h-full absolute top-[0] flex flex-col justify-start items-right bg-stone-300 z-[996] gap-[10px]">
                        <div className="w-full flex justify-right items-center p-[10px]">
                            <button className="text-gray-500 text-[20px]" onClick={()=>{dispatch(toggleFilter())}}><FontAwesomeIcon icon={faClose}/></button>
                        </div>
                        <div className="w-full flex justify-right items-center pr-[10px]">
                            <div className="w-full flex flex-col gap-[10px] justify-start items-right text-[16px]">
                                {categoryList.map((item)=>(
                                    <div key={item.id} onClick={()=>{setSelectedCategory(item.id)}} className="w-full flex justify-right items-center">
                                        <div className="w-[50%] flex justify-between items-center">
                                            <Link className="text-slate-700" href={"/"}>{item.title}</Link>
                                            <motion.span initial={{rotate:0}} animate={selectedCategory === item.id ? {rotate:"-90deg"} : {rotate:"0"}} transition={{duration:0.3}}><FontAwesomeIcon icon={faArrowLeft}/></motion.span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
        </>
    );
}
 
export default ProductsFilter;