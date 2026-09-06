"use client";
import Link from "next/link";
import Logo from "@/app/assets/Logo.jpg"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"
import SubNavbar from "./SubNavbar/Subnav";
import SearchInput from "../SearchInput/SearchInput";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";



const Navbar = () => {
    const {userLogedIn} = useSelector(state => state.AuthenticationUser);
    const [userState, setUserState] = useState(null);
    useEffect(()=>{ // get userLoginStateFromLocalStorage
        const {userLogedIn} = JSON.parse(localStorage.getItem("userAuth"));
        
        setUserState(userLogedIn);
    },[userLogedIn])    // reRun on Slice State Chenge
    console.log(userState) 
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
                    <Link href={userState ? "/profile/favorites" : "/Login"} className="hover:text-gray-700"><FontAwesomeIcon icon={faHeart} /></Link>
                    <Link href={userState ? "/profile" : "/Login"} className="hover:text-gray-700" ><FontAwesomeIcon icon={faUser} /></Link>
                </div>
            </div>
            <SubNavbar/>
        </>
    );
}

export default Navbar;