"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import CircleLoading from "../CircleLoading/CircleLoading";
import { useClickAway } from "react-use";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchInput = () => {
    const ref = useRef();
    const [value , setValue] = useState(null);  // stores the input value 
    const [isSeaching , setIsSearching] = useState(false);
    const [result , setResult] = useState(null);    // contains the api response
    const [loading , setLoading] = useState(false); // loading state
    const [error , setError] = useState(false);
    useClickAway(ref , ()=>{        //  the react-use hook for handling the isSearching state
        setValue(null);
        setIsSearching(false);
    })
    useEffect(()=>{
        const SearchData = async () => {
            setLoading(true);
            fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/products/search?q=${value}`)
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(()=>{setError(true)})
            .finally(()=>{setLoading(false)})
        };
        SearchData();
    },[value])
    return (
        <div className="flex flex-col gap-[10px] relative">
            <div className="w-full relative">
                <input onChange={(e)=>{setValue(e.target.value);setIsSearching(true)}} className="bg-gray-100 border-[1px] border-gray-300 w-[200px] md:w-[520px] rounded-lg text-right p-[5px] outline-none" type="text" placeholder="جستجو در محصولات ..." />
                <button className="absolute left-[5px] text-gray-400 pt-[3px] hover:text-black h-full cursor-pointer"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            {isSeaching ?
                <div ref={ref} className="w-full h-[200px] bg-white border-[1px] border-gray-400 border-solid rounded-md p-[10px] overflow-scroll scrollbar-none flex flex-col gap-[5px] absolute mt-[50px] z-[994]">
                    {loading ? <CircleLoading/>
                        :
                        result.products.length !==0 ? 
                        result?.products.map((item)=>(
                            <Link onClick={()=>{setIsSearching(false)}} key={item?.id} href={`/products/${item?.id}`} className="w-full flex justify-between p-[5px] shadow-gray-400 shadow-sm rounded-md">
                                <Image src={item?.images[0]} alt="resultImg" width={100} height={100} quality={100} className="w-[50px] h-auto md:w-[75px] lg:w-[100px]"/>
                                <div className="flex flex-2 flex-col justify-center items-center gap-[5px] text-[10px] text-gray-600 md:text-[16px]">
                                    <p>{item?.title}</p>
                                    <p>{item?.price}تومان</p>
                                </div>
                            </Link>
                        ))
                        :
                        <div className="w-full h-full flex justify-center items-center text-[10px] text-gray-600 md:text-[16px] lg:text-[20px]">
                            <p>نتیجه ای یافت نشد</p>
                        </div>
                    }
                </div>
                :
                null
            }
        </div>
    );
}
 
export default SearchInput;