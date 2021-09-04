import React,{Component} from 'react';

class SideNav extends Component{
	render(){
		return(
			<>
				<section className="sidenav" style={{overflowY:"hidden"}}>
					<aside class="sidenav">
			            <div class="sidenav__brand">
			              <a class="sidenav__brand-link" href="#" style={{fontSize:"17px"}}>DE-CENTRA-CART</a>
			              <i class="fas fa-times sidenav__brand-close"></i>
			            </div>
			            <div class="sidenav__profile">
			              <div class="sidenav__profile-avatar"></div>
			              <div class="sidenav__profile-title text-light" style={{fontSize:"12px"}}>DELIVERY-PERSON</div>
			            </div>
			            <div class="row row--align-v-center row--align-h-center">
			              <ul class="navList">
			                <li class="navList__heading">ORDERS</li>
			                <li>
			                  <div class="navList__subheading row row--align-v-center">
			                    <span class="navList__subheading-title"><a href="/previous">PREVIOUS ORDERS</a></span>
			                  </div>
			                </li>
							<li>
			                  <div class="navList__subheading row row--align-v-center">
			                    <span class="navList__subheading-title"><a href="/current">CURRENT ORDERS</a></span>
			                  </div>
			                </li>
			                <li>
			                  <div class="navList__subheading row row--align-v-center">
			                    <span class="navList__subheading-title"><a href="/change">CHANGE ORDER STATUS</a></span>
			                  </div>
			                </li>
			              </ul>
			            </div>
			          </aside>
				</section>
			</>
		);
	}
}

export default SideNav;