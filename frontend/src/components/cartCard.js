import React from 'react';
import "./cartCard.css";

const CartCard = (item) =>{
    return(
        <>
            <div className="card cartCard">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                        <img src={item.item.image} alt="" width="115px" height="230px" />
                    </div>
                    <div className="col-md-8">
                        <h2>{item.item.product_name}</h2>
                        <h3>Rs. {item.item.price}</h3>
                        <h4>{item.item.color}</h4>
                        <div className="descripiton">
                            <p>
                                {item.item.description}
                            </p>
                        </div>

                        <div className="removeButton">
                            <a href="#" style={{textDecoration:'none'}}><strong>Remove Product</strong></a>
                        </div>

                    </div>
                    
                </div>
                
            </div>
            <hr/>
        </>
    );
}

export default CartCard;