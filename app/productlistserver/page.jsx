import Product from "./product";


const handleGetProductList = async()=>{
  let data = await fetch("https://dummyjson.com/products")
  data= await data.json()
  console.log(data);

  return data.products
}
//  how to use server side with client side  both use 
const ProductLists = async() => {
  let products = await handleGetProductList()
  console.log('====================================');
  console.log(products);
  console.log('====================================');
  return (
    <div>
      <h1>Products</h1>
      {products.map((el)=>(
        <>
        <h3>Name:{el.title}</h3>
        <Product price={el.price} />
        </>
      ))}
    </div>
  )
}

export default ProductLists