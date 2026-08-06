import { faFileArchive, faHeart, faHouse } from "@fortawesome/free-regular-svg-icons";
import { faLocationPin, faSignOut} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";



const UserProfile = async () => {
    return (
        <div className="w-screen md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="flex-1 hidden items-center overflow-x-hidden overflow-y-scroll md:flex lg:scrollbar-none p-[10px]">
                    <div className="w-full h-[80%] flex flex-col gap-[20px] rounded-lg shadow-gray-300 shadow-md pt-[20px] pr-[10px] lg:pt-[30px] lg:pr-[20px] items-center text-slate-600 text-[16px] lg:text-[18px]">
                        <div className="p-[10px] w-full flex justify-right items-center xl:w-[80%]">
                            <Link href={"/"} className="flex gap-[5px] items-center"><FontAwesomeIcon icon={faHouse}/><span>خانه</span></Link>
                        </div>
                        <div className="p-[10px] w-full flex justify-right items-center xl:w-[80%]">
                            <Link href={"/profile/favorites"} className="flex gap-[5px] items-center"><FontAwesomeIcon icon={faHeart}/><span>علاقه مندی ها</span></Link>
                        </div>
                        <div className="p-[10px] w-full flex justify-right items-center xl:w-[80%]">
                            <Link href={"/"} className="flex gap-[5px] items-center"><FontAwesomeIcon icon={faFileArchive}/><span>سفارش ها</span></Link>
                        </div>
                        <div className="p-[10px] w-full flex justify-right items-center xl:w-[80%]">
                            <Link href={"/"} className="flex gap-[5px] items-center"><FontAwesomeIcon icon={faLocationPin}/><span>آدرس ها</span></Link>
                        </div>
                        <div className="p-[10px] w-full flex justify-right items-center xl:w-[80%]">
                            <button className="flex gap-[5px] items-center cursor-pointer hover:text-red-600"><FontAwesomeIcon icon={faSignOut}/><span>خروج</span></button>
                        </div>
                    </div>
                </div>
                <div className="flex-2 flex items-center p-[10px] lg:flex-4">
                    <div className="w-full h-full flex flex-col gap-[20px] p-[10px] overflow-x-hidden overflow-y-scroll md:h-[80%] lg:scrollbar-none md:rounded-lg md:shadow-gray-300 md:shadow-md">
                        <div className="w-full flex justify-center items-center p-[10px]">
                            <Image src={"/"} alt={"userImg"} width={100} height={100} quality={100} className=""/>
                        </div>
                        <div className="w-full flex justify-right items-center text-slate-800 text-[18px] lg:text-[20px] xl:text-[22px]">
                            <p>اطلاعات حساب</p>
                        </div>
                        <div className="flex flex-col pt-[10px] pr-[20px] gap-[20px] text-slate-800 text-[16px] lg:text-[18px] xl:text-[20px]">
                            <div className="flex gap-[10px]">
                                <span>نام کاربری</span>
                                :
                                <p className="text-slate-600">مصطفی آذری</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <span>نام</span>
                                :
                                <p className="text-slate-600">مصطفی</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <span>نام خانوادگی</span>
                                :
                                <p className="text-slate-600">آذری</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <span>شماره موبایل</span>
                                :
                                <p className="text-slate-600">0123456789</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserProfile;