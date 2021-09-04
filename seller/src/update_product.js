import React,{Component} from 'react';
import './add_blog.css';
import Header from './header';
import SideProductUpdate from './sideproductupdate';
import SideNav from './sidenav';
import Footer from './footer';

class UpdateProduct extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <SideProductUpdate/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default UpdateProduct;