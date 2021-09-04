import React,{Component} from 'react';
import './Dashboard.css';
import Header from './header';
import SideNav from './sidenav';
import CurrentOrdersMain from './current_main copy';
import Footer from './footer';

class CurrentOrders extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <CurrentOrdersMain/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default CurrentOrders;