"use client";

import { useEffect, useState } from "react";
import { useUpdate } from "react-use";
import { motion } from "framer-motion";
import Image from "next/image";
import { useWindowSize } from "react-use";

const SingleProduct = ({params}) => {
    const update = useUpdate();
    const {width , height} = useWindowSize();
    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);
    const [slide,setSlide] = useState(0);
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
                <div className="w-full h-full flex flex-col ">
                    <div className="flex-3">
                        <div className="w-full h-full flex flex-col lg:flex-row p-[10px] gap-[10px]">
                            <div className="flex-1">
                                <div className="w-full h-full flex flex-col gap-[5px]">
                                    <div className="flex-3 flex justify-center items-center">
                                        <div className="w-[200px] lg:w-[400px] xl:w-[500px] h-full overflow-hidden">
                                            <motion.div  animate={width >=1280 ? {translateX:slide*500} : (width >=1024 ? {translateX:slide*400} : {translateX:slide*200})} transition={{duration:0.5}} className={`h-full w-[600px] lg:w-[1200px] xl:w-[1500px] flex`}>
                                                {product?.images.map((item,index)=>(
                                                    <div key={index} className="p-[10p] w-[200px] lg:w-[400px] xl:w-[500px] h-full flex justify-center items-center">
                                                        <Image key={index} src={item} alt="productPic" quality={100} width={100} height={100} className="w-full h-auto"/>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </div>
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
                            <div className="flex-1 bg-zinc-400">

                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-blue-300">

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SingleProduct;