import AllProducts from "../components/AllProducts/AllProducts";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";



const Products = () => {
    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)] relative">
            <div className="w-full h-full flex gap-[10px] ">
                <div className="w-full h-full flex flex-col lg:flex-row  gap-[5px] ">
                    <div className="flex-1">
                        <ProductsFilter/>
                    </div>
                    <div className="flex-5 lg:flex-3 xl:flex-4">
                        <AllProducts/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;