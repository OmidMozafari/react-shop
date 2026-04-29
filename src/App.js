import { useState } from "react";

export default function App() {

  const productItems = [
    {name : "Iphone 16", price: "$1200"},
    {name : "Iphone 16 pro", price: "$1400"},
    {name : "Iphone 16 pro max", price: "$1800"},
    {name : "S23 ultra", price: "$1300"},
    {name : "S22 ultra", price: "$900"},
    {name : "Poco F3 Xiaomi", price: "$350"},
    {name : "Poco X3 Xiaomi", price: "$170"},
    {name : "Poco X5 Xiaomi", price: "$220"},
    {name : "Honor 8 lite", price: "$120"},
    {name : "Redmi Note 10+", price: "$180"},
    {name : "Redmi Note 11", price: "$240"},
    {name : "Galaxy S3+", price: "$70"},
  ]

  const [cartItem, setCartItem] = useState([])

  function handleCartItem(e){
    setCartItem((prev) => [...prev, e.target])
    console.log(cartItem);
    
    
    
  }
  

  return (
    <div className="container">
      <Products productItems = {productItems} handleCartItem = {handleCartItem} />
      <Cart />
    </div>
  );
}

function Products ({productItems, handleCartItem}){
  return <div className="productContainer">

    <div className="products-title">
      <h2>Products</h2>
    </div>

    <div className="productListContainer">

    {productItems.map((v)=>{

    return <div className="productList">
      <h3>{v.name}</h3>
      <p>{v.price}</p>
      <button onClick={handleCartItem}>Add</button>
    </div>
    })}

    </div>
  </div>
  }

function Cart(){
return <div className="cartContainer">

  <div className="cartTitle">
    <h1>Cart</h1>
  </div>

  {/* <div className="cartList">
    <div className="cardListItems">
      <h4>Shoes</h4>
      <p>$100</p>
      <button>❌</button>
    </div>


  </div> */}
  {/* <Total /> */}
</div>
}

function Total(){
  return <h3 className="total">Total: $1880</h3>
}
