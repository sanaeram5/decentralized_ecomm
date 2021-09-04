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
			                    <span class="navList__subheading-icon"><i class="fa fa-list-alt"></i></span>
			                    <span class="navList__subheading-title">PRODUCTS</span>
			                  </div>
			                  <ul class="subList subList--hidden">
			                    <li class="subList__item"><a href="/add">add</a></li>
			                    <li class="subList__item"><a href="/update">edit</a></li>
			                    <li class="subList__item"><a href="/delete">delete</a>
								</li>
			                  </ul>
			                </li>
							<li>
			                  <div class="navList__subheading row row--align-v-center">
			                    <span class="navList__subheading-title"><a href="/status">ORDER STATUS</a></span>
			                  </div>
			                </li>
			                <li>
			                  <div class="navList__subheading row row--align-v-center">
			                    <span class="navList__subheading-title"><a href="/earnings">MY EARNINGS</a></span>
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