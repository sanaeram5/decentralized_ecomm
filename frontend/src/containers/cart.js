import React from 'react';
import "./cart.css";
import CartCard from '../components/cartCard';
import CartData from '../db/cart';

const CartContets = CartData.map((item, index)=>(
    <CartCard item={item} key={index}/>
))
const Cart = () =>{
    return(
        <>
            <section className="Cart">
                <div className="container">
                    {CartContets}
                

                    <div className="CartButtons">
                        <button className="btn checkoutBtn">Check Out</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;