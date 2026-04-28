export default function App() {
  return (
    <div className="container">
      <Products />
      <Cart />
    </div>
  );
}

function Products (){
  return <div className="productContainer">

    <div className="products-title">
      <h2>Products</h2>
    </div>
  
  <div className="productListContainer">
    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

    <div className="productList">
      <h3>Mobile</h3>
      <p>$50</p>
      <button>Add</button>
    </div>

  </div>
  </div>
}

function Cart(){
return <div className="cartContainer">

  <div className="cartTitle">
    <h1>Cart</h1>
  </div>

  <div className="cartList">

    <div className="cardListItems">
      <h4>Shoes</h4>
      <p>$100</p>
      <button>❌</button>
    </div>

    <div className="cardListItems">
      <h4>Shoes</h4>
      <p>$100</p>
      <button>❌</button>
    </div>

    <div className="cardListItems">
      <h4>Shoes</h4>
      <p>$100</p>
      <button>❌</button>
    </div>

  </div>
  <Total />
</div>
}

function Total(){
  return <h3 className="total">Total: $1880</h3>
}
