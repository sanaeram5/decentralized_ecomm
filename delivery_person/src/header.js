import React,{Component} from 'react';

class Header extends Component{
	render(){
		return(
			<>
				<section className="head">
					<header className="header">
			            <i className="fas fa-bars header__menu"></i>
			            <div className="header__search">
			              <input className="header__input" placeholder="" />
			            </div>
			            <div className="header__avatar">
			              <div className="dropdown">
			                <ul className="dropdown__list">
			                  <li className="dropdown__list-item">
			                    <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
			                    <span className="dropdown__title">log out</span>
			                  </li>
			                </ul>
			              </div>
			            </div>
			          </header>
				</section>
			</>
		);
	}
}

export default Header;