import Link from "next/link";
import Logo from "@/app/assets/Logo.jpg"
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-[100px] flex justify-evenly items-center bg-white">
            <div className="flex gap-[10px]">
                <Link href={"/"}>Profile</Link>
                <Link href={"/"}>sabad</Link>
            </div>
            <div className="">
                <input className="bg-gray-300" type="text" placeholder="جست و جو " />
            </div>
            <div className="">
                <Image src={Logo} width={50} height={50} alt="Logo"/>
            </div>
        </div>
    );
}
 
export default Navbar;