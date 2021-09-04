import React,{Component} from 'react';
import './login.css';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component{
	render(){
		return(
			<>
				<section className="login-block">
				    <div className="container">
				        <div className="row">
				            <div className="col-lg-3 col-md-2"></div>
				            <div className="col-lg-6 col-md-8 login-box">
				                <div className="col-lg-12 login-key">
				                    <FontAwesomeIcon icon={faKey} style={{color:"#09e6cf",paddingTop:"1%"}} className="fa fa-key" aria-hidden="true"/>
				                </div>
				                <div className="col-lg-12 login-title">
				                    DE-CENTRA-CART
				                </div>

				                <div className="col-lg-12 login-form">
				                    <div className="col-lg-12 login-form">
				                        <form>
				                            <div className="form-group">
				                                <label className="form-control-label">USERNAME</label>
				                                <input type="text" className="form-control"/>
				                            </div>
				                            <div className="form-group">
				                                <label className="form-control-label">PASSWORD</label>
				                                <input type="password" className="form-control"/>
				                            </div>

				                            <div className="col-lg-12 loginbttm">
				                                <div className="col-lg-6 login-btm login-text">
				                                    {/*<!-- Error Message -->*/}
				                                </div>
				                                <div className="col-lg-6 login-btm login-button text-center">
				                                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
				                                </div>
				                            </div>
				                        </form>
				                    </div>
				                </div>
				                <div class="col-lg-3 col-md-2"></div>
				            </div>
				        </div>
				    </div>
				</section>
			</>
		);
	}
}

export default Login;