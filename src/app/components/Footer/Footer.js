import Image from "next/image";
import logo from "@/app/assets/Logo.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
    return (
        <div className="flex flex-col bg-gray-900 p-[10px]">
            <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
                <div className="flex flex-col justify-center items-center gap-[10px] p-[10px]">
                    <div className="w-full flex justify-right items-center">
                        <Image src={logo} quality={100} alt="logo" className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] rounded-2xl"/>
                    </div>
                    <div className="w-full flex flex-col text-[12px] md:text-[16px] text-gray-300">
                        <p>فروشگاه آنلاین شما</p>
                        <p>بهترین محصولات با بهترین قیمت</p>
                        <p>تضمین کیفیت</p>
                    </div>
                    <div className="flex w-full justify-right items-center text-[16px] md:text-[20px] text-gray-300">
                        <Link className="hover:text-gray-200" href={"/"}><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="hover:text-gray-200" href={"/"}><FontAwesomeIcon icon={faTelegram}/></Link>
                        <Link className="hover:text-gray-200" href={"/"}><FontAwesomeIcon icon={faGithub}/></Link>
                        <Link className="hover:text-gray-200" href={"/"}><FontAwesomeIcon icon={faLinkedin}/></Link>
                    </div>
                </div>
                <div className="flex justify-center items-start xl:items-center p-[10px]">
                    <div className="w-full flex flex-col justify-center items-right gap-[10px]">
                        <div className="flex justify-right items-center text-[16px] md:text-[20px] text-gray-200">
                            <p>دسترسی سریع</p>
                        </div>
                        <div className="flex flex-col justify-center items-right text-[12px] md:text-[16px] text-gray-300 gap-[5px]">
                            <Link className="hover:text-gray-200 w-auto" href={"/"}>خانه</Link>
                            <Link className="hover:text-gray-200 w-auto" href={"/"}>درباره ما</Link>
                            <Link className="hover:text-gray-200 w-auto" href={"/"}>وبلاگ</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-right xl:justify-center gap-[10px] p-[10px]">
                    <div className="w-full flex justify-right items-center text-[16px] md:text-[20px] text-gray-200">
                        <p>راهنمای خرید</p>
                    </div>
                    <div className="flex flex-col justify-center items-right text-[12px] md:text-[16px] text-gray-300 gap-[5px]">
                        <Link className="hover:text-gray-200" href={"/"}>سوالات متداول</Link>
                        <Link className="hover:text-gray-200" href={"/"}>روش های پرداخت</Link>
                        <Link className="hover:text-gray-200" href={"/"}>شرایط بازگست کالا</Link>
                        <Link className="hover:text-gray-200" href={"/"}>حریم خصوصی</Link>
                    </div>
                </div>
                <div className="flex justify-right items-start xl:items-center">
                    <div className="w-full flex flex-col justify-center items-right gap-[5px]">
                        <div className="w-full flex justify-right items-center text-[16px] md:text-[20px] text-gray-200">
                            <p>دریافت خبرنامه</p>
                        </div>
                        <div className="w-full flex justify-right items-center text-[12px] md:text-[16px] text-gray-300">
                            <p>با عضویت در خبرنامه از تخفیفات و جدیدترین محصولات با خبر شوید</p>
                        </div>
                        <div className="w-full flex items-center justify-right">
                            <input type="email" className="w-full lg:w-[80%] xl:w-[60%] p-[5px] md:p-[10px] lg:p-[15px] bg-white rounded-md" placeholder="email"/>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-gray-200"/>
            <div className="w-full flex justify-center items-center text-gray-300">
                <p>تمامی حقوق محفوظ می باشد 2026 ©</p>
            </div>
        </div>
    );
}
 
export default Footer;