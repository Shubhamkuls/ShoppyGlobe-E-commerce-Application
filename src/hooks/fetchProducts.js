import { useEffect,useState } from "react";
//custom hook for fetching product list

 function fetchProducts(){
    const [products, setProducts] = useState([]);//to store data of products fetching from api
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function productsFetch(){
            try{
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products); //geting data from API and storin in products
            }
            catch(err){
                setError("Failed to fetch products");
            }
            finally{
                setLoading(false);
            }
        }
        productsFetch();
    },[])
    return {products,error,loading};
}
export default fetchProducts;