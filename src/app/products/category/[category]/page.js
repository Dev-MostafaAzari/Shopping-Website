import Image from "next/image";
import Link from "next/link";
import ProductsSkeleton from "@/app/components/ProductsSkeleton/ProductsSkeleton";
import ProductsFilter from "@/app/components/ProductsFilter/ProductsFilter";
import { Suspense } from "react";


const CategorizedProduct = async ({params}) => {
    const {category} = await params;
    const products = await fetch(`${process.env.NEXT_PUBLIC_PRODUCTS_API_URL}/products/category/${category}`);
    if(!products.ok){
        console.log("error")
    }
    const data = await products.json();




    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)] relative">
            <div className="w-full h-full flex gap-[10px] ">
                <div className="w-full h-full flex flex-col lg:flex-row  gap-[5px] ">
                    <div className="flex-1">
                        <ProductsFilter/>
                    </div>
                    <div className="flex-5 lg:flex-3 xl:flex-4">
                        <div className="w-full h-full">
                            <div className="w-full h-full p-[10px]">
                                <div className="w-full h-full rounded-md shadow-sm shadow-zinc-400 flex p-[10px]">
                                    <div className="w-full h-full flex flex-col justify-center items-right p-[10px] gap-[10px] ">
                                        <h2 className="text-slate-600 text-[20px]">لیست محصولات</h2>
                                        <div className="w-full h-full overflow-y-scroll scrollbar-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-[350px] gap-[20px]">
                                            <Suspense fallback={<ProductsSkeleton/>}>
                                                {data.products.map((item) => (
                                                    <div key={item.id} className="w-full h-full p-[10px] rounded-md shadow-zinc-400 shadow-md hover:shadow-lg relative">
                                                        <Link href={`/products/${item.id}`} className="w-full h-full flex flex-col justify-center items-center gap-[10px] p-[10px]">
                                                            <div className="w-full h-full flex justify-center">
                                                                <Image src={`${item.images[0]}`} width={100} height={100} quality={100} alt={`${item.brand}`} className="w-[250px] h-auto" />
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
                                            </Suspense>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CategorizedProduct;