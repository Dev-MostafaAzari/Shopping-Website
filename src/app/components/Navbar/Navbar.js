import Link from "next/link";
import Logo from "@/app/assets/Logo.jpg"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SubNavbar from "./SubNavbar/Subnav";




const Navbar = () => {
    return (
        <>
            <div className="h-[100px] flex justify-evenly items-center bg-white ">
                <div className="block sm:hidden">
                    <Image src={Logo} width={50} height={50} alt="Logo" className="rounded-[50%]" />
                </div>
                <div className="">
                    <div className="relative">
                        <input className="bg-gray-100 border-[1px] border-gray-300 w-[200px] md:w-[520px] rounded-lg text-right p-[5px] outline-none" type="text" placeholder="جستجو در محصولات ..." />
                        <button className="absolute left-[5px] text-gray-400 pt-[3px] hover:text-black h-full cursor-pointer"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                </div>
                <div className="hidden md:flex sm:hidden  gap-[10px] text-gray-600 text-[20px]">
                    <Link href={"/"} className="hover:text-gray-700"><FontAwesomeIcon icon={faShoppingBag} /></Link>
                    <Link href={"/"} className="hover:text-gray-700"><FontAwesomeIcon icon={faHeart} /></Link>
                    <Link href={"/"} className="hover:text-gray-700" ><FontAwesomeIcon icon={faUser} /></Link>
                </div>
            </div>
            <SubNavbar/>
        </>
    );
}

export default Navbar;