import React,{Component} from 'react';
import './add_blog.css';
import Header from './header';
import ChangeOrderStatusMain from './changeordermain';
import SideNav from './sidenav';
import Footer from './footer';

class ChangeOrderStatus extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <ChangeOrderStatusMain/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default ChangeOrderStatus;