import React,{Component} from 'react';
import './Dashboard.css';
import Header from './header';
import SideNav from './sidenav';
import MyEarningsMain from './myearningsmain';
import Footer from './footer';

class MyEranings extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <MyEarningsMain/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default MyEranings;