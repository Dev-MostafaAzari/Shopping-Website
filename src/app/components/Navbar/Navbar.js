import Link from "next/link";
import Logo from "@/app/assets/Logo.jpg"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SubNavbar from "./SubNavbar/Subnav";
import SearchInput from "../SearchInput/SearchInput";




const Navbar = () => {
    return (
        <>
            <div className="h-[100px] flex justify-evenly items-center bg-white ">
                <div className="block">
                    <Image src={Logo} width={50} height={50} alt="Logo" className="rounded-[50%]" />
                </div>
                <div className="">
                    <SearchInput/>
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