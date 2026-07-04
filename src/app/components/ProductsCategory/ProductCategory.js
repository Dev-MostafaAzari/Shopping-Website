import Image from "next/image";
import Link from "next/link";
import phone from "@/app/assets/phone.png";
import bag from "@/app/assets/bag2.png";
import headphone from "@/app/assets/headphone.png";
import shoe from "@/app/assets/shoe2.png";
import jacket from "@/app/assets/jacket.png";

const ProductCategory = () => {
    return (
        <div className="w-full p-[10px]">
            <h2>دسته بندی ها</h2>
            <div className="w-full grid grid-cols-3 gap-[10px] lg:grid-cols-6">
                <div  className="rounded-sm flex  justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={bag} alt="Bag" width={75} height={75} className=""/>
                        <span>کیف و کوله</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={jacket} alt="Bag" width={75} height={75} className=""/>
                        <span>لباس</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={shoe} alt="Bag" width={75} height={75} className=""/>
                        <span>کفش</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={headphone} alt="Bag" width={75} height={75} className=""/>
                        <span>هدفون</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={phone} alt="Bag" width={75} height={75} className=""/>
                        <span>ساعت</span>
                    </Link>
                </div>
                <div  className="rounded-sm flex justify-center items-center overflow-hidden">
                    <Link href={"/"} className="flex flex-col">
                        <Image src={phone} alt="Bag" width={75} height={75} className=""/>
                        <span>موبایل</span>
                    </Link>
                </div>
                
            </div>
        </div>
    );
}
 
export default ProductCategory;