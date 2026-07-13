"use client";

import { faClose, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";


const ProductsFilter = () => {
   

    return (
        <div className="w-full h-full">
            <div className="w-full h-full hidden lg:flex">

            </div>
            <div className="w-full h-full flex justify-right items-center lg:hidden">
                <button className="text-gray-600 font-thin text-[12px] border-[1px] border-solid border-gray-300 p-[5px] rounded-sm"><FontAwesomeIcon icon={faFilter}/>فیلترها</button>
            </div>
        </div>
    );
}
 
export default ProductsFilter;