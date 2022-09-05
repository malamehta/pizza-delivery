import React, { useEffect, useState } from "react";
import "./Menu.css";
import "../../App.css";
// import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../slices/cartSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const getItems = async () => {
    const response = await fetch("http://localhost:9000/items");
    setItems(await response.json());
    
  };
  useEffect(() => {
    getItems();
    // getTotals();
  }, []);
  return (
    <>
      <header className="menu-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>LOGO</h1>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="/Menu">menu</a>
              </li>
              <li>
                <a href="/Cart">
                  cart<span>{cartTotalQuantity}</span>
                </a>
              </li>
              <li>
                <a href="/Menu">Profile</a>
              </li>
              <li>
                <a href="/Menu">Logot</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="products">
        {items &&
          items?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.imgUrl} alt={product.name}/>
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button
                onClick={() =>{
                  dispatch(addToCart(product))
                  dispatch(getTotals())
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
