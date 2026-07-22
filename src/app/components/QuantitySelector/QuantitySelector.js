"use client";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const QuantitySelector = () => {
    const [quantity , setQuantity] = useState(0);
    return (
        <div className="flex justify-center items-center gap-[5px]">
            <button className={`p-[10px] text-gray-600 text-[16px] `} onClick={()=>{setQuantity(prev=>prev+1)}}><FontAwesomeIcon icon={faAngleRight}/></button>
            <input className="p-[10px]" type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
            <button className={`p-[10px] text-[16px] ${quantity===0 ? "text-gray-300" : "text-gray-600"}`} disabled={quantity === 0 ? true : false} onClick={quantity !=0 ? ()=>{setQuantity(prev=>prev-1)} : null }><FontAwesomeIcon icon={faAngleLeft}/></button>
        </div>
    );
}
 
export default QuantitySelector;