import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons"


const BottomNavigation = () => {
    return (
        <div className="w-screen h-[65px] border-t-[1px] border-gray-400 border-solid md:hidden absolute bottom-[0px] ">
            <div className="w-full h-full flex justify-evenly items-center gap-[10px] text-gray-600 text-[20px] flex-row-reverse">
                <Link href={"/"}><FontAwesomeIcon icon={faUser}/></Link>
                <Link href={"/"}><FontAwesomeIcon icon={faHeart}/></Link>
                <Link href={"/"}><FontAwesomeIcon icon={faShoppingBag}/></Link>
            </div>
        </div>
    );
}
 
export default BottomNavigation;