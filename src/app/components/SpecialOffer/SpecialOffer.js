"use client";

import Image from "next/image";
import Link from "next/link";
import watch from "@/app/assets/watch2.png";
import headphone from "@/app/assets/headPhone3.png";
import jacket from "@/app/assets/jacket.png";
import shoes from "@/app/assets/shoes2.png";


const SpecialOffer = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between lg:text-[20px]">
                        <h2>پیشنهاد شگفت انگیز</h2>
                        <Link href={"/"} className="text-blue-400 hover:text-blue-600">نمایش همه</Link>
                    </div>
                    <div className="grid grid-cols-2 lg-grid-cols-4">
                        <div className="flex flex-col justify-center items-center gap-[5px]">
                            <Image src={headphone} quality={100} className="w-[100px] h-auto lg:w-[150]"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    
                </div>
            </div>
        </div>
    );
}
 
export default SpecialOffer;