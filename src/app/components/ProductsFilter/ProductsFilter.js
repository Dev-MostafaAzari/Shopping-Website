"use client";

import { faAngleDoubleLeft, faAngleLeft, faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/app/redux/features/filterSlice";
import Link from "next/link";

const ProductsFilter = () => {
    const {filterShow} = useSelector(state => state.filterProduct);
    const dispatch = useDispatch();
    const [selectedCategory , setSelectedCategory]=useState(null);
    const categoryList = [
        {title:"لباس",id:1,category:["ژاکت مردانه","تیشرت","پیراهن","کاپشن"]}
        ,{title:"ساعت مردانه",id:2,category:["ساعت دیجیتال","ساعت مردانه","ساعت زنانه"]}
        ,{title:"کفش",id:3,category:["کتانی ورزشی","کفش مجلسی","کفش زنانه","دمپایی","کفش مردانه","کفش کوهنوردی"]}
        ,{title:"گوشی",id:4,category:["آیفون","سامسونگ","شیامی","سونی"]}];

    return (
        <>
            <div className="w-full h-full">
                <div className="w-full h-full hidden lg:flex p-[10px]">
                    <div className="w-full h-full flex flex-col items-center gap-[20px] shadow-sm shadow-zinc-400 rounded-md">
                        <div className="w-full flex justify-right items-center p-[10px] text-[20px] text-slate-700">
                            <p>فیلترها</p>
                        </div>
                        <div className="w-[80%] h-full flex flex-col justify-start items-center gap-[30px] p-[10px]">
                            {categoryList.map((item)=>(
                                <div key={item.id} className="w-full flex flex-col justify-center items-right">
                                    <div className="w-full flex justify-between items-center cursor-pointer shadow-md shadow-zinc-400 p-[10px] rounded-xl lg:text-[12px] xl:text-[16px]" onClick={selectedCategory === item.id ? (()=>{setSelectedCategory(null)}) : (()=>{setSelectedCategory(item.id)})}>
                                        <Link className="text-slate-600 hover:text-slate-900 cursor-pointer" href={"/"}>{item.title}</Link>
                                        <motion.span initial={{rotate:"0"}} animate={selectedCategory === item.id ? {rotate:"-90deg"} : {rotate:"0"}} transition={{duration:"0.3"}}><FontAwesomeIcon icon={faAngleDoubleLeft}/></motion.span>
                                    </div>
                                    <motion.div  className="w-full grid grid-cols-1 xl:grid-cols-2 gap-[10px] p-[10px] overflow-hidden lg:text-[12px]" initial={{height:"0px"}} animate={selectedCategory === item.id ? {height:"auto"} : {height:"0px"}} transition={{ease:"easeInOut",duration:0.1}}>  
                                        {item.category.map((value,index)=>(
                                            <motion.div key={index*Math.floor(Math.random()*1000000)} initial={{display:"none"}} animate={selectedCategory === item.id ? {display:"flex"} : {display:"none"}} transition={{damping:"6000",type:"spring"}} className="flex justify-center items-center">
                                                <Link className="text-slate-500 hover:text-slate-700" href={"/"}>{value}</Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex  justify-right items-center lg:hidden">
                    <button onClick={()=>{dispatch(toggleFilter());setSelectedCategory(null)}} className="mr-[5px] text-gray-600 font-thin text-[12px] border-[1px] border-solid border-gray-300 p-[5px] rounded-sm cursor-pointer"><FontAwesomeIcon icon={faFilter}/>فیلترها</button>
                    <motion.div initial={{opacity:0,display:"none"}} animate={filterShow ? {opacity:1,display:"flex"} : {opacity:0,display:"none"}} transition={{duration:0.3}} className="w-full h-full absolute top-[0] flex flex-col justify-start items-right bg-white overflow-y-scroll scrollbar-none z-[996] gap-[10px]">
                        <div className="w-full flex justify-right items-center p-[10px]">
                            <button className="text-gray-500 text-[20px] cursor-pointer" onClick={()=>{dispatch(toggleFilter())}}><FontAwesomeIcon icon={faClose}/></button>
                        </div>
                        <div className="w-full flex justify-right items-center pr-[10px]">
                            <div className="w-full flex flex-col justify-start items-right text-[16px] gap-[30px]">
                                <div className="flex justify-right items-center text-slate-700 text-[20px]">
                                    <p>فیلترها</p>
                                </div>
                                {categoryList.map((item)=>(
                                    <div className="flex flex-col justify-start items-right text-[16px] gap-[20px]" key={item.id}>
                                        <div onClick={selectedCategory === item.id ? (()=>{setSelectedCategory(null)}) : (()=>{setSelectedCategory(item.id)})} className="w-full flex justify-right items-center cursor-pointer">
                                            <div className="w-[50%] flex justify-between items-center">
                                                <Link className="text-slate-700" href={"/"}>{item.title}</Link>
                                                <motion.span initial={{rotate:0}} animate={selectedCategory === item.id ? {rotate:"-90deg"} : {rotate:"0"}} transition={{duration:0.3}}><FontAwesomeIcon icon={faAngleLeft}/></motion.span>
                                            </div>
                                        </div>
                                        <motion.div initial={{display:"none",height:"0px"}} animate={selectedCategory === item.id ? {display:"grid",height:"auto"} : {display:"none",height:"0px"}} transition={{duration:0}} className="w-full grid grid-cols-4 gap-[5px]">
                                            {item.category.map((value,index)=>(
                                                <div key={index*Math.floor(Math.random()*10000)} className="text-slate-600 text-[12px] flex justify-center items-center">
                                                    <Link href={"/"}>{value}</Link>    
                                                </div>
                                            ))}
                                        </motion.div>
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