"use client"

const Product = ({price}) => {
    console.log(price);
  return (
    <div>
        <button onClick={()=>alert(price)} >Get price</button>
    </div>
  )
}

export default Product