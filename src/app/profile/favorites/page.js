"use client";

import Pagination from "@/app/components/Pagination/Pagination";
import { removeFavorite, setFavorites } from "@/app/redux/features/favoritesSlice";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";


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
                <div className="w-full flex-8 flex flex-col gap-[10px] p-[10px] overflow-x-hidden overflow-y-scroll lg:scrollbar-none">
                    {favorites?.slice(start,end).map((item)=>(
                        <div key={item.id} className="w-full flex justify-between items-center gap-[10px] p-[5px] shadow-gray-400 shadow-sm rounded-md">
                            <div className="flex-1">
                                <Image src={item.images[0]} width={100} height={100} quality={100} alt={item.title} className="w-[70px] h-[70px]"/>
                            </div>
                            <div className="flex flex-1 flex-col justify-between gap-[5px] text-[10px] text-center truncate text-gray-600" dir="ltr">
                                <p>{item.title}</p>
                                <p>{item.price}تومان</p>
                            </div>
                            <div className="flex flex-2 justify-center items-center">
                                <button className="p-[10px] text-[10px] text-white flex-2 bg-blue-600 rounded-md coursor-pointer">افزودن به سبد خرید</button>
                                <button onClick={()=>{dispatch(removeFavorite(item))}} className="flex-1 md:text-gray-400 hover-gray-700 coursor-pointer"><FontAwesomeIcon icon={faClose}/></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex-1 flex justify-center items-center">
                    <Pagination/>
                </div>
            </div>
        </div>
    );
}
 
export default Favorites;