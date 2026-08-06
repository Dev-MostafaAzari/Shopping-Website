import Image from "next/image";



const UserProfile = async () => {
    return (
        <div className="w-screen md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full flex flex-col md:flex-row">
                <div className="flex-1 hidden overflow-x-hidden overflow-y-scroll lg:flex lg:scrollbar-none bg-gray-400">

                </div>
                <div className="flex-2 flex flex-col p-[10px] gap-[20px] overflow-x-hidden overflow-y-scroll">
                    <div className="w-full flex justify-center items-center p-[10px]">
                        <Image src={"/"} alt={"userImg"} width={100} height={100} quality={100} className=""/>
                    </div>
                    <div className="w-full flex justify-right items-center text-slate-800 text-[18px]">
                        <p>اطلاعات حساب</p>
                    </div>
                    <div className="flex flex-col p-[10px] gap-[20px] text-slate-800 text-[16px]">
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
    );
}
 
export default UserProfile;