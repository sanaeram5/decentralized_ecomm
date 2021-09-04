import React from 'react';
import "./productsCard.css";

const ProductCard = (item) =>{
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>    
                    <div className="col-md-3">
                        <img src={item.item.image} alt="" width="115px" height="230px" />
                    </div>
                    <div className="col-md-7">
                        <a >
                        <h2>{item.item.product_name}</h2>
                            </a>
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
                    <div className="col-md-1"/>
                </div>
            </div>
            <hr/>
        </>
    );
}

export default ProductCard;