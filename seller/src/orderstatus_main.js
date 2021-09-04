import React,{Component} from 'react';

class OrderStatusMain extends Component{
	render(){
		return(
			<>
				<section className="main">
					<main class="main">
						<div className="container pb-5">
							<h1 className="pb-2 pt-4 text-center">OrderStatus</h1>
							<table class="table table-dark">
							  <thead>
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">Product Name</th>
							      <th scope="col">Status</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <th scope="row">1</th>
							      <td>Mark</td>
							      <td>500</td>
							    </tr>
							    <tr>
							      <th scope="row">2</th>
							      <td>Jacob</td>
							      <td>1000</td>
							    </tr>
							    <tr>
							      <th scope="row">3</th>
							      <td>Larry</td>
							      <td>800</td>
							    </tr>
							  </tbody>
							</table>
						</div>
					</main>
				</section>
			</>
		);
	}
}

export default OrderStatusMain;