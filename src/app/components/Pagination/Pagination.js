"use client";

import { useSelector , useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setFavPage } from "@/app/redux/features/favoritesSlice";

const Pagination = () => {
    const {activePage,favorites} = useSelector((state)=> state.FavoriteProducts);
    const [favoritesItems , setFavoritesItems] = useState(null);
    const [pages , setPages] = useState(favoritesItems?.length);
    const dispatch = useDispatch();
    useEffect(()=>{ //reading the localStorage Value On Component Mount to Prevent Hydration Error
        const {favorites} = JSON.parse(localStorage.getItem("products") || "{}")
        setFavoritesItems(favorites)
        setPages(favorites?.length)
    },[favorites])  // useEffect will recall when favorites list chenged (this will update pages status)
    return (
        <div className={`items-center gap-[5px] p-[10px] ${pages <=0 || pages === undefined ? "hidden" : "flex"}`} dir="ltr">
            {Array.from({length:Math.ceil(pages/10)}).map((_,index)=>(
                <div key={index} className="">
                    <button disabled={activePage === index ? true : false} onClick={()=>{dispatch(setFavPage(index))}} className={`p-[10px] rounded-md cursor-pointer ${activePage === index ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}>{index+1}</button>
                </div>
            ))}
        </div>
    );
}
 
export default Pagination;