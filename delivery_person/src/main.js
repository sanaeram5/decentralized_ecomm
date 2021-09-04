import React,{Component} from 'react';
import axios from 'axios';

class Main extends Component{
	
	render(){
		return(
			<>
				<section className="dash">
					<main class="main">
			            <div class="main-header">
			              <div class="main-header__intro-wrapper">
			                <div class="main-header__welcome">
			                  <div class="main-header__welcome-title text-light">Welcome,</div>
			                  <div class="main-header__welcome-subtitle text-light">How are you today?</div>
			                </div>
			                <div class="quickview">
			                  <div class="quickview__item">
			                    <div class="quickview__item-total"></div>
			                    <div class="quickview__item-description">
			                      <i class="fa fa-calendar-alt"></i>
			                      <span class="text-light"></span>
			                    </div>
			                  </div>
			                  <div class="quickview__item">
			                    <div class="quickview__item-total"></div>
			                    <div class="quickview__item-description">
			                      <span class="text-light"></span>
			                    </div>
			                  </div>
			                  <div class="quickview__item">
			                    <div class="quickview__item-total">27&deg;</div>
			                    <div class="quickview__item-description">
			                      <i class="fas fa-map-marker-alt"></i>
			                      <span class="text-light">Delhi</span>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div class="main-overview">
			              <div class="overviewCard">
			                <div class="overviewCard-icon overviewCard-icon--document">
							<i class="fa fa-arrow-circle-left"></i>
			                </div>
			                <div class="overviewCard-description">
			                  <h3 class="overviewCard-title text-light"><strong>Previous Orders</strong></h3>
			                  <p class="overviewCard-subtitle"><a href="/previous">Previous Orders</a></p>
			                </div>
			              </div>
			              <div class="overviewCard">
			                <div class="overviewCard-icon overviewCard-icon--calendar">
			                   <i class="fa fa-get-pocket"></i>
			                </div>
			                <div class="overviewCard-description">
			                  <h3 class="overviewCard-title text-light"><strong>Current Orders</strong></h3>
			                  <p class="overviewCard-subtitle"><a href="/current">Currents Orders</a></p>
			                </div>
			              </div>
			              <div class="overviewCard">
			                <div class="overviewCard-icon overviewCard-icon--mail">
			                   <i class="fa fa-edit"></i>
			                </div>
			                <div class="overviewCard-description">
			                  <h3 class="overviewCard-title text-light"><strong>Chenage Order Status</strong></h3>
			                  <p class="overviewCard-subtitle"><a href="/change">Change Order Status</a></p>
			                </div>
			              </div>
			            </div>
			          </main>
				</section>
			</>
		);
	}
}

export default Main;