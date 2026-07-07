import Image from "next/image";
import Link from "next/link";
import phone from "@/app/assets/phone2.png";
import bag from "@/app/assets/bag.png";
import headphone from "@/app/assets/headPhone2.png";
import shoe from "@/app/assets/shoes.png";
import jacket from "@/app/assets/jacket.png";
import watch from "@/app/assets/watch2.png";

const ProductCategory = () => {
    return (
        <div className="w-full flex flex-col gap-[20px] p-[10px]">
            <div className="w-full flex justify-center items-center lg:px-[20px]">
                <div className="w-full lg:w-[90%] flex justify-between items-center">
                    <h2 className="lg:text-[20px]">دسته بندی ها</h2>
                    <Link href={"/"} className="text-blue-400 hover:text-blue-600">نمایش همه</Link>
                </div>
            </div>
            <div className="w-full grid grid-cols-3 lg:grid-cols-6 text-gray-500 text-xs gap-[10px] lg:gap-[0px] lg:text-sm ">
                <div  className="rounded-sm flex  justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={bag} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>کیف و کوله</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={jacket} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>لباس</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={shoe} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>کفش</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={headphone} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>هدفون</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={watch} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>ساعت</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col text-center gap-[5px]">
                        <Image src={phone} alt="Bag" width={100} height={75} className="h-[100px] bg-slate-200 rounded"/>
                        <span>موبایل</span>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}
 
export default ProductCategory;