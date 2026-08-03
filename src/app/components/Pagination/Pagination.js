"use client";

import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setFavPage } from "@/app/redux/features/favoritesSlice";

const Pagination = () => {
    const {activePage} = useSelector((state)=> state.FavoriteProducts);
    const [favorites , setFavorites] = useState(null);
    const [pages , setPages] = useState(favorites?.length);
    const dispatch = useDispatch();
    useEffect(()=>{ //reading the localStorage Value On Component Mount to Prevent Hydration Error
            const {favorites} = JSON.parse(localStorage.getItem("products") || "{}")
            setFavorites(favorites)
            setPages(favorites.length)
        },[])
    return (
        <div className={`items-center gap-[5px] p-[10px] ${pages <=0 ? "hidden" : "flex"}`} dir="ltr">
            {Array.from({length:Math.ceil(pages/10)}).map((_,index)=>(
                <div key={index} className="">
                    <button disabled={activePage === index ? true : false} onClick={()=>{dispatch(setFavPage(index))}} className={`p-[10px] rounded-md cursor-pointer ${activePage === index ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}>{index+1}</button>
                </div>
            ))}
        </div>
    );
}
 
export default Pagination;