"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const [value , setValue] = useState(null);
    const [isSeaching , setIsSearching] = useState(true);
    const [result , setResult] = useState(null);
    const [loading , setLoading] = useState(false);
    /* useEffect(()=>{
        const SearchData = async () => {
            setLoading(true);
            fetch(`${NEXT_PUBLIC_PRODUCTS_API_URL}/products/search?q=${value}&limit=10&skip=0&select=title,price,image`)
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(()=>{setResult(null)})
            .finally(()=>{setLoading(false)})
        };
        SearchData();
    },[value]) */
    return (
        <div className="flex flex-col gap-[10px] relative">
            <div className="w-full relative">
                <input  className="bg-gray-100 border-[1px] border-gray-300 w-[200px] md:w-[520px] rounded-lg text-right p-[5px] outline-none" type="text" placeholder="جستجو در محصولات ..." />
                <button className="absolute left-[5px] text-gray-400 pt-[3px] hover:text-black h-full cursor-pointer"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            {isSeaching ?
                <div className="w-full h-[200px] bg-white border-[1px] border-gray-400 border-solid rounded-md p-[10px] overflow-scroll scrollbar-none flex flex-col gap-[5px] absolute mt-[50px] z-[994]">
                    {/* if loading ? loading component (circle loading) : result items map  */}
                </div>
                :
                null
            }
        </div>
    );
}
 
export default SearchInput;