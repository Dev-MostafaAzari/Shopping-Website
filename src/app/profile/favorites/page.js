"use client";

import Pagination from "@/app/components/Pagination/Pagination";
import { removeFavorite, setFavorites } from "@/app/redux/features/favoritesSlice";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Link from "next/link";


const Favorites = () => {
    const {favorites , start , end} = useSelector(state => state.FavoriteProducts); // use Slice States Values to create Each Element
    const dispatch = useDispatch();
    useEffect(()=>{ //reading the localStorage Value On Component Mount to Prevent Hydration Error
        const {favorites} = JSON.parse(localStorage.getItem("products") || "{}")
        dispatch(setFavorites(favorites));  // set localStorage Value to the SliceState
    },[])
    return (
        <div className="w-screen overflow-x-hidden overflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full flex flex-col">
                <div className="w-full min-h-full flex flex-col gap-[10px] p-[10px] overflow-x-hidden overflow-y-scroll lg:scrollbar-none">
                    <div className="w-full flex justify-right items-center p-[10px]">
                        <h2 className="text-slate-600 lg:text-[20px] xl:text-[22px]">لیست علاقه مندی ها</h2>
                    </div>
                    {favorites?.slice(start,end).map((item)=>(
                        <Link key={item.id} href={`/products/${item.id}`} className="w-full flex justify-between items-center gap-[10px] p-[5px] shadow-gray-400 shadow-sm rounded-md">
                            <div className="flex-1">
                                <Image src={item.images[0]} width={100} height={100} quality={100} alt={item.title} className="w-[70px] h-auto lg:w-[100px] xl:w-[150px]"/>
                            </div>
                            <div className="flex flex-1 flex-col justify-between gap-[5px] text-[10px] text-center truncate text-gray-600 lg:text-[16px] lg:flex-2 xl:flex-3 xl:text-[20px]" dir="ltr">
                                <p>{item.title}</p>
                                <p>{item.price}تومان</p>
                            </div>
                            <div className="flex flex-2 justify-center items-center lg:flex-1">
                                <motion.button initial={{background:"#2563EB"}} whileHover={{background:"#1E40AF"}} transition={{duration:0.3,ease:"easeOut"}} className="p-[10px] text-[10px] text-white flex-2 rounded-md cursor-pointer lg:text-[12px] xl:text-[16px]">افزودن به سبد خرید</motion.button>
                                <button onClick={()=>{dispatch(removeFavorite(item))}} className="flex-1 md:text-gray-400 hover:text-gray-700 cursor-pointer"><FontAwesomeIcon icon={faClose}/></button>
                            </div>
                        </Link>
                    ))}
                    <div className="w-full flex-1 flex justify-center items-center">
                        <Pagination/>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Favorites;