"use client";

import { useEffect, useState } from "react";
import { useUpdate } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import QuantitySelector from "@/app/components/QuantitySelector/QuantitySelector";

const SingleProduct = ({params}) => {
    const update = useUpdate();
    const {width , height} = useWindowSize();
    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);
    const [slide,setSlide] = useState(0);
    const [activeTab , setActiveTap]=useState(0);
    useEffect(()=>{
        const GetProduct= async ()=>{
            const id = await params;
            fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/products/${id.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(()=>{update()})
            .finally(()=>{setLoading(false)})
        }
        GetProduct();
    },[])
    return (
        <div className="w-screen overflow-x-hidden overflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full p-[10px]">
                <div className="w-full h-full flex flex-col">
                    <div className="flex-3">
                        <div className="w-full h-full flex flex-col lg:flex-row p-[10px] gap-[20px]">
                            <div className="flex-1">
                                <div className="w-full h-full flex flex-col gap-[5px]">
                                    <div className="flex-3 flex justify-center items-center relative">
                                        <div className="w-[200px] lg:w-[400px] xl:w-[500px] h-full overflow-hidden">
                                            <motion.div  animate={width >=1280 ? {translateX:slide*500} : (width >=1024 ? {translateX:slide*400} : {translateX:slide*200})} transition={{duration:0.5}} className={`h-full w-[600px] lg:w-[1200px] xl:w-[1500px] flex`}>
                                                {product?.images.map((item,index)=>(
                                                    <div key={index} className="p-[10p] w-[200px] lg:w-[400px] xl:w-[500px] h-full flex justify-center items-center">
                                                        <Image key={index} src={item} alt="productPic" quality={100} width={100} height={100} className="w-full h-auto"/>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
                                        <button className="absolute top-[10px] left-[10px] text-gray-400 text-[16px] cursor-pointer"><FontAwesomeIcon icon={faHeart}/></button> {/* reminder : add to favorite in progress ... */}
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-full h-full flex justify-center items-center gap-[10px] ">
                                            {product?.images.map((item,index)=>(
                                                <div key={index} onClick={()=>{setSlide(index)}} className={`p-[20p] cursor-pointer rounded-xl ${slide===index ? "border-[1px] border-gray-600":""}`}>
                                                    <Image key={index} src={item} alt="productPic" quality={100} width={100} height={100} className="w-[75px] h-auto"/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="w-full h-full flex flex-col gap-[10px]">
                                    <div className="w-full flex justify-right items-center text-zinc-800 text-[20px]">
                                        <h1>{product?.title}</h1>
                                    </div>
                                    <div className="w-full flex justify-right items-center gap-[5px] text-[12px]">
                                        <FontAwesomeIcon className="text-amber-400" icon={faStar}/>
                                        <span className="text-gray-500">{product?.rating}</span>
                                    </div>
                                    <div className="w-full flex justify-right items-center text-zinc-700 text-[20px]">
                                        <p>{product?.price}تومان</p>
                                    </div>
                                    <div className="w-full flex justify-right items-center text-pretty text-[16px] text-zinc-400" dir="ltr">
                                        <p>{product?.description}</p>
                                    </div>
                                    <div className="w-full h-full flex gap-[10px] justify-between p-[10px]">
                                        <div className="flex items-center">
                                            <button className="text-stone-50 text-[16px] border-1px rounded-xl bg-sky-700 p-[10px]">افزودن به سبدخرید</button>
                                        </div>
                                        <div className="flex p-[10px] items-center ">
                                            <QuantitySelector/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* taps */}
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-[10px]">
                            <div className="flex w-full justify-evenly items-center">
                                <motion.button onClick={()=>{setActiveTap(0)}} className={`p-[10px] ${activeTab===0 ? "text-gray-700":"text-gray-400"} relative`}>مشخصات 
                                    <motion.div initial={{width:"0px",height:"2px"}} animate={activeTab === 0 ? {width:"100%",height:"2px"} : null} transition={{direction:0.5}} className="absolute bottom-[0px] right-[0px] bg-blue-600 rounded-xl"/>
                                </motion.button>
                                <motion.button onClick={()=>{setActiveTap(1)}} className={`p-[10px] ${activeTab===1 ? "text-gray-700":"text-gray-400"} relative`}>جزئیات محصول 
                                    <motion.div initial={{width:"0px",height:"2px"}} animate={activeTab === 1 ? {width:"100%",height:"2px"} : null} transition={{direction:0.5}} className="absolute bottom-[0px] right-[0px] bg-blue-600 rounded-xl"/>
                                </motion.button>
                                <motion.button onClick={()=>{setActiveTap(2)}} className={`p-[10px] ${activeTab===2 ? "text-gray-700":"text-gray-400"} relative`}>نظرات 
                                    <span>{`(${product?.reviews.length})`}</span> <motion.div initial={{width:"0px",height:"2px"}} animate={activeTab === 2 ? {width:"100%",height:"2px"} : null} transition={{direction:0.5}} className="absolute bottom-[0px] right-[0px] bg-blue-600 rounded-xl"/>
                                </motion.button>
                            </div>
                            <hr className="text-gray-300"/>
                            <div className={`w-full p-[10px] ${activeTab===0 || activeTab===1 ? "flex flex-col" : "hidden"}`}>
                                <div className="w-full p-[10px]">
                                    {activeTab===0 ? <div className="w-full flex justify-right items-center gap-[5px]"><p className="text-zinc-800">نام محصول</p>:<p className="text-gray-500">{product?.title}</p></div>
                                        : 
                                    activeTab===1 ? <div className="w-full flex justify-right items-center gap-[5px]"><p className="text-zinc-800">وزن</p>:<p className="text-gray-500">{product?.weight}kg</p></div> : null}
                                </div>
                                <div className="w-full p-[10px]">
                                    {activeTab === 0 ?
                                        <div className="w-full flex justify-right items-center gap-[5px]">
                                            <p className="text-zinc-800">برند</p>:<p className="text-gray-500">{product?.brand}</p>
                                        </div>
                                    : null}
                                    {activeTab === 1 ?
                                        <div className="w-full flex justify-right items-center gap-[5px]">
                                            <p className="text-zinc-800">ابعاد</p>:<p className="text-gray-500">{product?.dimensions.width}x{product?.dimensions.height}x{product?.dimensions.depth}</p>
                                        </div>
                                    : null}
                                </div>
                                <div className="w-full  p-[10px]">
                                    {activeTab === 0 ?
                                        <div className="w-full flex justify-right items-center gap-[5px]">
                                            <p className="text-zinc-800">دسته بندی</p>:<p className="text-gray-500">{product?.category}</p>
                                        </div>
                                    : null}
                                    {activeTab === 1 ?
                                        <div className="w-full flex justify-right items-center gap-[5px]">
                                            <p className="text-zinc-800">گارانتی</p>:<p className="text-gray-500">{product?.warrantyInformation}</p>
                                        </div>
                                    : null}
                                </div>
                            </div>
                            {/* reviews part*/}               
                            <div className={`w-full p-[10px] gap-[10px] ${activeTab === 2 ? "flex flex-col" : "hidden"}`}>
                                {product?.reviews.map((item,index)=>(
                                    <div key={index} className="w-full p-[10px]">
                                        <div className="w-full flex justify-right gap-[10px] relative">
                                            <p className="text-gray-800">{item.reviewerName}</p>
                                            <div className="flex gap-[3px]" dir="ltr">{item.rating}<span className="text-amber-400"><FontAwesomeIcon icon={faStar}/></span></div>
                                            <div className="absolute top-[5px] left-[5px] text-gray-700 text-[8px]">{item.date}</div>
                                        </div>
                                        <div className="w-full flex text-gray-500 text-pretty text-[12px]" dir="ltr">
                                            <p>{item.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SingleProduct;