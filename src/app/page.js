import HomeMainSlider from "./components/HomeMainSlider/HomeMainSlider";
import ProductCategory from "./components/ProductsCategory/ProductCategory";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden md:h-[calc(100vh-200px)] h-[calc(100vh-164px)] flex flex-col gap-[20px] ">
      <HomeMainSlider/>
      <ProductCategory/>
    </div>
  );
}
