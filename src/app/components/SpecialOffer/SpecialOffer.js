"use client";

import Image from "next/image";
import Link from "next/link";
import watch from "@/app/assets/watch2.png";
import headphone from "@/app/assets/headPhone3.png";
import jacket from "@/app/assets/jacket.png";
import shoes from "@/app/assets/shoes2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const SpecialOffer = () => {
    return (
        <div className="w-full lg:p-[10px]">
            <div className="w-full flex justify-center items-center">
                <div className="flex w-full lg:w-[1566px] flex-col-reverse lg:flex-row items-center lg:gap-[10px] justify-center">
                    <div className="w-full flex flex-col items-center justify-center lg:flex-4">
                        <div className="w-full flex items-center justify-between lg:text-[20px] p-[10px]">
                            <h2>پیشنهاد شگفت انگیز</h2>
                            <Link href={"/"} className="text-blue-400 hover:text-blue-600">نمایش همه</Link>
                        </div>
                        <div className="w-full grid grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col justify-center items-center gap-[5px] p-[10px] relative">
                                <Image src={headphone} quality={100} alt="headphone" className="w-[150px] h-[150px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[20px]">هدفون بیسیم سونی</p>
                                <p className="text-[12px] lg:text-[20px]">2500000تومان</p>
                                <button className="absolute bottom-[0px] right-[10px] cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] p-[10px] relative">
                                <Image src={jacket} quality={100} alt="headphone" className="w-[150px] h-[150px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[20px]">ژاکت مردانه</p>
                                <p className="text-[12px] lg:text-[20px]">2500000تومان</p>
                                <button className="absolute bottom-[0px] right-[10px] cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] p-[10px] relative">
                                <Image src={watch} quality={100} alt="headphone" className="w-[150px] h-[150px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[20px]">ساعت مچی مردانه</p>
                                <p className="text-[12px] lg:text-[20px]">2500000تومان</p>
                                <button className="absolute bottom-[0px] right-[10px] cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] p-[10px] relative">
                                <Image src={shoes} quality={100} alt="headphone" className="w-[150px] h-[150px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[20px]">کتانی مردانه</p>
                                <p className="text-[12px] lg:text-[20px]">2500000تومان</p>
                                <button className="absolute bottom-[0px] right-[10px] cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-sky-900 rounded-md lg:rounded-xl p-[10px] lg:flex-2">
                        <div className="flex justify-between items-center">
                            <Image src={watch} quality={100} alt="watch" className="w-[150px] h-auto lg:w-[200px]"/>
                            <div className="flex flex-col justify-center items-center gap-[5px] text-teal-100 text-[16px] lg:text-[20px]">
                                <p>تخفیف ویژه</p>
                                <p>تا 20% تخفیف</p>
                                <p>روی ساعت های مچی</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p>12/20/30</p>
                            <button style={{transition:"all 0.4s"}} className="p-[10px] lg:p-[15px] bg-white text-black rounded-sm cursor-pointer hover:bg-violet-900 hover:text-white">مشاهده و خرید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SpecialOffer;