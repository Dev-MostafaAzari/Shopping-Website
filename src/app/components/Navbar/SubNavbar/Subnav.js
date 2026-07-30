"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

// category motion variant
const motionVariant = {
    initial:{
        display:"none",
        scale:0.3,
        transformOrigin:"50% 0%",
    },
    animate:{
        display:"flex",
        scale:1,
    },
    transition:{
        duration:0.5,
        type:"spring",
    }
}

const SubNavbar = () => {
    // states for SubNavbar category menu
    const [isHovered , setIsHovered] = useState(false); //category display status
    const [selectedCategory , setSelectedCategory] = useState(null); //selected category
    const CategoryList = [{title:"کیف زنانه",link:"womens-bags",cate:"clothes"},{title:"لباس زنانه",link:"womens-dresses",cate:"clothes"},{title:"زیورآلات زنانه",link:"womens-jewellery",cate:"clothes"}
        ,{title:"کفش زنانه",link:"womens-shoes",cate:"clothes"},{title:"لباس مردانه",link:"mens-shirts",cate:"clothes"},{title:"کفش مردانه",link:"mens-shoes",cate:"clothes"},{title:"ساعت مردانه",link:"mens-watches",cate:"clothes"}
        ,{title:"عینک آفتابی",link:"sunglasses",cate:"clothes"},{title:"موبایل",link:"smartphones",cate:"digital"},{title:"تبلت",link:"tablets",cate:"digital"},{title:"لوازم جانبی موبایل",link:"mobile-accessories",cate:"digital"}
        ,{title:"لپ تاپ",link:"laptops",cate:"digital"},{title:"مراقبت پوست",link:"skin-care",cate:"beauty"},{title:"آرایشی",link:"beauty",cate:"beauty"},{title:"عطر",link:"fragrances",cate:"beauty"}
        ,{title:"لوازم آشپزخانه",link:"kitchen-accessories",cate:"kitchen"},{title:"موتورسیکلت",link:"motorcycle",cate:"vehicle"},{title:"خودرو سواری",link:"vehicle",cate:"vehicle"}
    ]

    return (
        <div onMouseLeave={()=>{setIsHovered(false);setSelectedCategory(null)}} className="w-screen h-[100px] hidden lg:flex justify-right items-center gap-[70px] pr-[100px] text-gray-600 relative">
            <div onMouseEnter={()=>{setIsHovered(false);setSelectedCategory(null)}}><Link href={"/"} className="hover:text-gray-800">خانه</Link></div>
            <div className="xl:hidden"><Link href={"/products"} className="hover:text-gray-800">دسته بندی ها</Link></div> {/* on lg screen */}
            <div className="hidden xl:block">
                <Link onMouseOver={()=>{setIsHovered(true)}} href={"/products"} className="hover:text-gray-800">دسته بندی ها</Link>
                <motion.div variants={motionVariant} initial={"initial"} animate={isHovered ? "animate" : "initial"} transition={"transition"} className={`absolute w-[80%] h-[500px] flex gap-[10px] mt-[20px] p-[10px] border-solid border-gray-300 border-[1px] bg-white z-[9999] rounded-xl`}>
                    <div className="flex flex-col flex-1 justify-center gap-[20px] pr-[30px] gap text-gray-500 text-[20px]">
                        <div><button onMouseEnter={()=>{setSelectedCategory("clothes")}} className="hover:text-gray-700 cursor-pointer">پوشاک</button></div>
                        <div><button onMouseEnter={()=>{setSelectedCategory("beauty")}}  className="hover:text-gray-700 cursor-pointer">آرایشی و بهداشتی</button></div>
                        <div><button onMouseEnter={()=>{setSelectedCategory("kitchen")}} className="hover:text-gray-700 cursor-pointer">وسایل پخت و پز</button></div>
                        <div><button onMouseEnter={()=>{setSelectedCategory("vehicle")}} className="hover:text-gray-700 cursor-pointer">وسایل نقلیه</button></div>
                        <div><button onMouseEnter={()=>{setSelectedCategory("digital")}} className="hover:text-gray-700 cursor-pointer">وسایل دیجیتال</button></div>
                    </div>
                    <div className="flex flex-col flex-3 gap-[20px] pr-[30px] justify-center text-[20px] text-gray-500 border-r-[1px] border-solid border-gray-500">
                        {/* first need to create new component to show category requested api result */}
                        {CategoryList.map((item)=>( 
                            <div key={Math.floor(Math.random()*1000000)} className={`${selectedCategory === item.cate ? "block" : "hidden"}`}><Link href={`/products/category/${item.link}`} className="hover:text-gray-700">{item.title}</Link></div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div onMouseMove={()=>{setIsHovered(false)}}><Link href={"/"} className="hover:text-gray-800">وبلاگ</Link></div>
            <div onMouseMove={()=>{setIsHovered(false)}}><Link href={"/"} className="hover:text-gray-800">درباره ما</Link></div>
        </div>
    );
}
 
export default SubNavbar;