"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faHeart, faHome, faUser } from "@fortawesome/free-regular-svg-icons"
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";

const BottomNavigation = () => {
    const {userLogedIn} = useSelector((state)=> state.AuthenticationUser);
    const [userState, setUserState] = useState(null);
    useEffect(()=>{ // get userLoginStateFromLocalStorage
        const {userLogedIn} = JSON.parse(localStorage.getItem("userAuth") || false); //if userLogedIn was not exist return false
        setUserState(userLogedIn);
    },[userLogedIn])    // reRun on Slice State Chenge
    return (
        <div className="w-screen h-[65px] border-t-[1px] border-gray-400 border-solid md:hidden bg-white absolute bottom-[0px] z-[999]">
            <div className="w-full h-full flex justify-evenly items-center gap-[10px] text-gray-600 text-[20px] flex-row-reverse">
                <Link href={userState ? "/profile" : "/Login"}><FontAwesomeIcon icon={faUser}/></Link>
                <Link href={userState ? "/profile/favorites" :"/Login"}><FontAwesomeIcon icon={faHeart}/></Link>
                <Link href={"/"}><FontAwesomeIcon icon={faShoppingBag}/></Link>
                <Link href={"/"}><FontAwesomeIcon icon={faHome}/></Link>
            </div>
        </div>
    );
}
 
export default BottomNavigation;