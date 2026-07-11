"use client";

import Image from "next/image";
import Link from "next/link";
import watch from "@/app/assets/watch2.png";
import headphone from "@/app/assets/headPhone3.png";
import jacket from "@/app/assets/jacket.png";
import shoes from "@/app/assets/shoes2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import CountDown from "../CountDown/CountDown";

const SpecialOffer = () => {
    return (
        <div className="w-full lg:p-[10px]">
            <div className="w-full flex justify-center items-center">
                <div className="flex w-full lg:w-[1566px] flex-col-reverse md:flex-row items-center lg:gap-[10px] p-[10px] justify-center">
                    <div className="w-full flex flex-col items-center justify-center md:flex-4">
                        <div className="w-full flex items-center justify-between lg:text-[20px] p-[10px]">
                            <h2>پیشنهاد شگفت انگیز</h2>
                            <Link href={"/"} className="text-blue-400 hover:text-blue-600">نمایش همه</Link>
                        </div>
                        <div className="w-full grid grid-cols-2 md:grid-cols-4">
                            <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px] p-[10px]">
                                <Image src={headphone} quality={100} alt="headphone" className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">هدفون بیسیم سونی</p>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">2500000تومان</p>
                                <div className="w-full flex justify-right items-center">
                                    <button className=" cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px] p-[10px] ">
                                <Image src={jacket} quality={100} alt="headphone" className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">ژاکت مردانه</p>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">2500000تومان</p>
                                <div className="w-full flex justify-right items-center">
                                    <button className=" cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px] p-[10px] ">
                                <Image src={watch} quality={100} alt="headphone" className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">ساعت مچی مردانه</p>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">2500000تومان</p>
                                <div className="w-full flex justify-right items-center">
                                    <button className=" cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px] p-[10px] ">
                                <Image src={shoes} quality={100} alt="headphone" className="w-[150px] h-[150px] md:w-[120px] md:h-[120px] lg:w-[150px] bg-sky-100 rounded-sm"/>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">کتانی مردانه</p>
                                <p className="text-[12px] lg:text-[16px] xl:text-[20px]">2500000تومان</p>
                                <div className="w-full flex justify-right items-center">
                                    <button className=" cursor-pointer"><FontAwesomeIcon icon={faShoppingBasket}/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-sky-900 rounded-md lg:rounded-xl p-[10px] md:flex-2">
                        <div className="flex justify-between items-center">
                            <Image src={watch} quality={100} alt="watch" className="w-[150px] h-auto lg:w-[200px]"/>
                            <div className="flex flex-col justify-center items-center gap-[5px] text-teal-100 text-[16px] md:text-[10px] lg:text-[20px]">
                                <p>تخفیف ویژه</p>
                                <p>تا 20% تخفیف</p>
                                <p>روی ساعت های مچی</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[5px] md:gap-[2px] lg:gap-[5px]">
                            <div><CountDown/></div>
                            <button style={{transition:"all 0.4s"}} className="p-[10px] lg:p-[15px] bg-white text-black rounded-sm cursor-pointer hover:bg-violet-900 hover:text-white">مشاهده و خرید</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SpecialOffer;