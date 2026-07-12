import axios from "axios";

const productsApi = axios.create({
    baseURL : process.env.Next_Products_Api_Url,
});

export default productsApi;