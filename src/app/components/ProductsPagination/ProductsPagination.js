"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nextPage , prevPage , setPage } from "@/app/redux/features/allProducsSlice";


const ProductsPagination = ({ProductsLength}) => {
    const dispatch = useDispatch();
    const [length , setLength] = useState(null);    //Number of Products
    const [pages,setPages] = useState(null);        // Number of pages
    const [activePage,setActivePage] = useState(0); // active page
    useEffect(()=>{
        const getData = async ()=>{
            const length = await ProductsLength;    // products length given as a props
            setLength(length);                  
            setPages(Math.ceil(length/15)); // create one page for every 15 product
        }
        getData();
    })


    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-center gap-[10px] p-[10px]" dir="ltr">
                <button disabled={activePage === 0 ? true : false} onClick={()=>{setActivePage(prev=>prev-1);dispatch(prevPage())}} className={`text-zinc-500 ${activePage === 0 ? "" : "hover:text-zinc-700 cursor-pointer"}`}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <div className="flex justify-center items-center gap-[10px] p-[10px]" dir="ltr">
                    {Array.from({length:pages}).map((_,index)=>(
                        <div key={index} className={`justify-center items-center gap-[10px] ${(index===activePage || index===activePage-1 || index===activePage+1) ? "flex" :"hidden"}`} dir="ltr" > {/* activePage , prevPage , nextPage */}
                            <div className={`flex gap-[10px] justify-center items-center ${index===pages-1 && index===activePage ? "flex" : "hidden"}`}> {/* when we are at last page (shortcut to the first page) */}
                                <button  onClick={()=>{setActivePage(0);dispatch(setPage(0))}} className={`p-[10px] w-[40px] h-[40px] rounded-xl ${activePage === pages ? "bg-blue-500 text-white" : "bg-blue-200"}  shadow-zinx-400 shadow-sm cursor-pointer`}>1</button>
                                <span>...</span>
                            </div>
                            <button  onClick={()=>{setActivePage(index);dispatch(setPage(index))}} className={`p-[10px] w-[40px] h-[40px] rounded-xl ${activePage === index ? "bg-blue-500 text-white" : "bg-blue-200"}  shadow-zinx-400 shadow-sm cursor-pointer`}>{index+1}</button>
                            <div className={`flex gap-[10px] justify-center items-center ${index===activePage+1 && index<pages-1 ? "flex" : "hidden"}`}> {/* when we are not at last page (shortcut to the last page) */}
                                <span>...</span>
                                <button  onClick={()=>{setActivePage(pages-1);dispatch(setPage(pages-1))}} className={`p-[10px] w-[40px] h-[40px] rounded-xl ${activePage === pages ? "bg-blue-500 text-white" : "bg-blue-200"}  shadow-zinx-400 shadow-sm cursor-pointer`}>{pages}</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button disabled={activePage === pages-1 ? true : false} onClick={()=>{setActivePage(prev=>prev+1);dispatch(nextPage())}} className={`text-zinc-500 ${activePage === pages-1 ? "" : "hover:text-zinc-700 cursor-pointer"}`}><FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </div>
    );
}
 
export default ProductsPagination;