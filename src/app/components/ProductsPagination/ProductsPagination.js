"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nextPage , prevPage , setPage } from "@/app/redux/features/allProducsSlice";


const ProductsPagination = ({ProductsLength}) => {
    const dispatch = useDispatch();
    const [length , setLength] = useState(null);
    const [pages,setPages] = useState(null);
    const [activePage,setActivePage] = useState(0);
    useEffect(()=>{
        const getData = async ()=>{
            const length = await ProductsLength;
            setLength(length);
            setPages(length/15);
        }
        getData();
    })
    console.log(length);


    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex items-center justify-center gap-[10px] p-[10px]" dir="ltr">
                <button disabled={activePage === 0 ? true : false} onClick={()=>{setActivePage(prev=>prev-1);dispatch(prevPage())}} className={`text-zinc-500 ${activePage === 0 ? "" : "hover:text-zinc-700 cursor-pointer"}`}><FontAwesomeIcon icon={faAngleLeft}/></button>
                <div className="flex justify-center items-center gap-[10px] p-[10px]" dir="ltr">
                    {Array.from({length:pages}).map((_,index)=>(
                        <button key={index} onClick={()=>{setActivePage(index);dispatch(setPage(index))}} className={`p-[10px] w-[40px] h-[40px] rounded-xl ${activePage === index ? "bg-blue-500 text-white" : "bg-blue-200"} shadow-zinx-400 shadow-sm cursor-pointer`}>{index+1}</button>
                    ))}
                </div>
                <button disabled={activePage === pages-1 ? true : false} onClick={()=>{setActivePage(prev=>prev+1);dispatch(nextPage())}} className={`text-zinc-500 ${activePage === pages-1 ? "" : "hover:text-zinc-700 cursor-pointer"}`}><FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
        </div>
    );
}
 
export default ProductsPagination;