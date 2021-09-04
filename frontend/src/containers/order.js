import React from 'react';
import "./order.css";
import iphone from "../images/apple-iphone-12.jpeg";

const Order = () =>{
    return(
        <>
            <section className="Order container">
                <div className="product_details">
                    <div className="row form_items">
                        <div className="col-md-4">
                            <img src={iphone} width="50px" height="100px" alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h5>Product Name</h5>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="delivery_form">
                    <h4 className="shippingDetails">Enter Shipping Details</h4>
                    <form action="" method="">
                        {/* Name */}
                        <div className="fullName row form_items">
                            <label for="buyerName" className="col-sm-2 offset-4 col-form-label">Full Name</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="buyerName"/>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="address row form_items">
                            <label for="buyerAddress" className="col-sm-2 offset-4 col-form-label">Address</label>
                            <div className="col-sm-6">
                                <input type="text" className="form-control" id="buyerAddress"/>
                            </div>
                        </div>
                        <div className="pincode row form_items">
                            <label for="pincode" className="col-sm-2 offset-4 col-form-label">Pincode</label>
                            <div className="col-sm-6">
                                <input type="number" className="form-control" id="pincode"/>
                            </div>
                        </div>

                        {/* Mobile Number */}
                        <div className="MobileNumber row form_items">
                            <label for="mobileNumber" className="col-sm-2 offset-4 col-form-label">Mobile Number</label>
                            <div className="col-sm-6">
                                <input type="number" className="form-control" id="mobileNumber"/>
                            </div>
                        </div>

                        <div className="checkOutSection">
                            <div className="totalAmount">Total Amount:<strong>20,000</strong></div>
                            <button className="btn orderButton" type="submit">Place Order</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Order;