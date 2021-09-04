import React,{Component} from 'react';
import './Dashboard.css';
import Header from './header';
import SideNav from './sidenav';
import PreviousOrdersMain from './previousorders_main';
import Footer from './footer';

class PreviousOrders extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <PreviousOrdersMain/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default PreviousOrders;