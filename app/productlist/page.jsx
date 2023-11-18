"use client"
import { useEffect, useState } from 'react';



const ProductList = () => {
    const [product,setProduct] = useState([])
    const fetchData = async () => {
        try {
          const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
        setProduct(data.products)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <h1>Product List</h1>
    {product.map((el)=>(
       <h1> Name: {el.title} </h1>
    ))}
    </div>
  );
};

export default ProductList;
