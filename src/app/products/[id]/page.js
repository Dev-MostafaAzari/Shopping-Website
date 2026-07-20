"use client";

import { useEffect, useState } from "react";
import { useUpdate } from "react-use";

const SingleProduct = ({params}) => {
    const update = useUpdate();
    const [product , setProduct] = useState(null);
    const [loading , setLoading] = useState(true);
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
        <></>
    );
}
 
export default SingleProduct;