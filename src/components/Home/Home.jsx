import React from 'react';
import {Link} from "react-router-dom";
import Header from '../Header/Header';
import "./Home.css"

 function Home() {
  return (
    <>
     <Header/>
    <main className="index-main">
        <section className="maincontent-section">
            <h1 className="title">Pizza Delivery</h1>
            <p className="para1">Welcome to pizza delivery services.This is the place where you may chose the most delicious pizza from 
                wide variety of options
            </p>
            <p className="para2">We are providing free delivery if you order is higher than $20</p>
            <Link to={'/Signin'} class="order-btn">Signin and Order</Link>

        </section>
    </main>
    </>
  )
}
export default Home;
