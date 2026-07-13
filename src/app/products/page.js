
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllProducts from "../components/AllProducts/AllProducts";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";


const Products = () => {
    return (
        <div className="w-screen overflow-x-hidden ovarflow-y-scroll lg:scrollbar-none md:h-[calc(100vh-100px)] lg:h-[calc(100vh-200px)] h-[calc(100vh-164px)]">
            <div className="w-full h-full flex gap-[10px] ">
                <div className="w-full h-full flex flex-col lg:flex-row  gap-[5px] ">
                    <div className="flex-1 p-[10px]">
                        <ProductsFilter/>
                    </div>
                    <div className="flex-5 bg-gray-300 overflow-y-scroll scrollbar-none overflow-x-hidden lg:flex-3">
                        <AllProducts/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Products;