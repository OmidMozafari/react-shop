import { useState } from "react";

export default function App() {

  const productItems = [
    {name : "Iphone 16", price: "$1200", Image: "./Mobile Photos/ "},
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
    {name : "Samsung Galaxy S3+", price: "$70"},
  ]

  const [cartItem, setCartItem] = useState([])

  function handleCartItem(v){
    setCartItem((prev) => [...prev, v ])
  }

  
  

  return (
    <div className="container">
      <Products productItems = {productItems} handleCartItem = {handleCartItem} />
      <Cart cartItem = {cartItem} />
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
      <button onClick={() => handleCartItem(v)}>Add</button>
    </div>
    })}

    </div>
  </div>
  }

function Cart({cartItem}){
return <div className="cartContainer">

  <div className="cartTitle">
    <h1>Cart</h1>
  </div>

  <div className="cartList">
  {cartItem.map(value =>{
    return  <div className="cardListItems">
      <h4>{value.name}</h4>
      <p>{value.price}</p>
      <button>❌</button>
    </div>
  })
   


}</div>
  </div>
  {/* <Total /> */}
}

function Total(){
  return <h3 className="total">Total: $1880</h3>
}
