import React,{Component} from 'react';
import './add_blog.css';
import Header from './header';
import SideProductDelete from './sideproductdelete';
import SideNav from './sidenav';
import Footer from './footer';

class AddBlog extends Component{
	render(){
		return(
			<>
			<section className="dashboard">
        <div className="grid">
          <Header/>
          <SideNav/>
          <SideProductDelete/>
          <Footer/>
        </div>
      </section>
			</>
			);
	}
}

export default AddBlog;