import React,{Component} from 'react';
import './add_blog.css';
import Header from './header';
import SideProductAdd from './sideproductadd';
import SideNav from './sidenav';
import Footer from './footer';

class AddProduct extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <SideProductAdd/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default AddProduct;