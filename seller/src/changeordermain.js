import React,{Component} from 'react';
import './add_blog.css';

class ChangeOrderStatusMain extends Component{
	render(){
		return(
			<>
				<section className="main">
					<main class="main">
						<div className="container pb-5">
							<h1 className="pb-2 pt-4 text-center">Change Order Status</h1>
							<form>
								<div class="form-group">
								    <select class="custom-select form-control" required>
								      <option value="">Product Name</option>
								      <option value="1">One</option>
								      <option value="2">Two</option>
								      <option value="3">Three</option>
								    </select>
								</div>
								<div class="form-group">
								    <select class="custom-select form-control" required>
								      <option value="">Status</option>
								      <option value="1">Packed</option>
								      <option value="2">Dispatched</option>
								      <option value="3">Delivered</option>
								    </select>
								</div>
								<button class="btn btn-primary" type="submit">Update Status</button>
							</form>
						</div>
					</main>
				</section>
			</>
		);
	}
}

export default ChangeOrderStatusMain;