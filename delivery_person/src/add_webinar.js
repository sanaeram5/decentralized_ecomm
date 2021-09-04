import React,{Component} from 'react';
import './add_blog.css';
import Header from './header';
import SideWebinarAdd from './sidewebinaradd';
import SideNav from './sidenav';
import Footer from './footer';

class DeleteWebinar extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
		        <div className="grid">
		          <Header/>
		          <SideNav/>
		          <SideWebinarAdd/>
		          <Footer/>
		        </div>
		      </section>
			</>
			);
	}
}

export default DeleteWebinar;