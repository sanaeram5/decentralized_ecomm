import React,{Component} from 'react';
import './Dashboard.css';
import Header from './header';
import SideNav from './sidenav';
import Main from './main';
import Footer from './footer';

class Dashboard extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <h2>Dash</h2>
          <Header/>
          <SideNav/>
          <Main/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default Dashboard;