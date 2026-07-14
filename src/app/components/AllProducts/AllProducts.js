


const AllProducts = async () => {
    const getProducts = async () =>{
        const response = await fetch(`${process.env.Next_Products_Api_Url}/products`);
        if(!response.ok){
            console.log("error")
        }
        const data = await response.json();
        return data;
    }
    const data = await getProducts();
    console.log(data.products);
    return (
        <div className="w-full h-full">
            <div className="w-full h-full p-[10px]">
                <div className="w-full h-full rounded-md shadow-sm shadow-zinc-400">
                    
                </div>
            </div>
        </div>
    );
}
 
export default AllProducts;