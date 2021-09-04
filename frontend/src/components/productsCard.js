import React, {Component} from 'react';
import axios from 'axios';
import "./productsCard.css";

class ProductCard extends Component{

	constructor(props){
		super(props);
		this.state={
			items:[]
		};
	}

    componentDidMount(){
		axios.get('http://localhost:3000/get-all-products')
		.then(response => {
			console.log(response);
			this.setState({items: response.data});
		})
		.catch(error =>{
			console.log(error);
		})
	}

    render(){

		const {items}=this.state;
    return(
        <>
            {items.length?
						items.map(item=>
                            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>    
                    <div className="col-md-3">
                        <img src={item.img} alt="" width="115px" height="230px" />
                    </div>
                    <div className="col-md-7">
                        <a style={{cursor:"pointer",textDecoration:"none"}}>
                        <h2>{item.name}</h2>
                            </a>
                        <h3>Rs. {item.price}</h3>
                        <h4>{item.seller}</h4>
                        <div className="descripiton">
                            <p>
                                {item.description}
                            </p>
                        </div>
                        
                    </div>   
                    <div className="col-md-1"/>
                </div>
            </div>
            <div className="addToCart">
                            <a href="#" style={{textDecoration:'none',backgroundColor:'#883454',color:"#fff",padding:"10px"}}><strong>Add to Cart</strong></a>
                        </div>
                        </React.Fragment>):null}

            <hr/>
        </>
    );
}
}

export default ProductCard;