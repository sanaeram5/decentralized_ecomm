import React,{Component} from 'react';
import './Dashboard.css';
import Header from './header';
import SideNav from './sidenav';
import OrderStatusMain from './orderstatus_main';
import Footer from './footer';

class OrderStatus extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <OrderStatusMain/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default OrderStatus;