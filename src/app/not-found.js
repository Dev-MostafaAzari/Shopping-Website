import error from "@/app/assets/error404.jpg";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-[10px] lg:text-[20px]">
                <Image src={error} quality={100} alt="error404" className=""/>
                <p>متاسفانه صفحه موردنظر یافت نشد</p>
                <div className="flex justify-center items-center text-blue-400">
                    <Link href={"/"} className="hover:text-blue-800">بازگشت به خانه</Link>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;