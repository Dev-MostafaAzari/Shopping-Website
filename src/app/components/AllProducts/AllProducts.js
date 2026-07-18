"use client";
import Image from "next/image";
import Link from "next/link";
import ProductsPagination from "../ProductsPagination/ProductsPagination";
import { useSelector } from "react-redux";
import { useEffect , useState} from "react";


const AllProducts = () => {
    const {skip} = useSelector((state)=> state.AllProducts);
    const [data , setData]=useState();
    console.log(process.env.NEXT_PUBLIC_PRODUCTS_API_URL)
    useEffect(()=>{
        const getProducts = async () =>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/products?limit=15&skip=${skip}`);
            if(!response.ok){
                console.log("error")
            }
            const value = await response.json();
            setData(value);
            
        }
        getProducts();
    },[skip])
    
    return (
        <div className="w-full h-full">
            <div className="w-full h-full p-[10px]">
                <div className="w-full h-full rounded-md shadow-sm shadow-zinc-400 flex p-[10px]">
                    <div className="w-full h-full flex flex-col justify-center items-right p-[10px] gap-[10px] ">
                        <h2 className="text-slate-600 text-[20px]">لیست محصولات</h2>
                        <div className="w-full h-full overflow-y-scroll scrollbar-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-[350px] gap-[20px]">
                            {data?.products.map((item)=>(
                                <div key={item.id} className="w-full h-full p-[10px] rounded-md shadow-zinc-400 shadow-md hover:shadow-lg relative">
                                    <Link href={"/"} className="w-full h-full flex flex-col justify-center items-center gap-[10px] p-[10px]">
                                        <div className="w-full h-full flex justify-center">
                                            <Image src={`${item.images[0]}`} width={100} height={100} quality={100} alt={`${item.brand}`} className="w-[250px] h-auto"/>
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <p className="text-slate-400">{item.title}</p>
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <p className="text-slate-600">150.000.000تومان</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            <div className="w-full h-full col-span-full">
                                <ProductsPagination ProductsLength={192}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AllProducts;