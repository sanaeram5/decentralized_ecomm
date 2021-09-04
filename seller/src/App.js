import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './login';
import OrderStatus from './orderstatus';
import MyEranings from './myearnings';
import AddProduct from './add_product';
import DeleteProduct from './delete_product';
import UpdateProduct from './update_product';

const App=()=>{
	return(
	<>
		<BrowserRouter>
      	<Switch>
		<Route path="/" exact component={Dashboard}/>
        <Route path="/status" exact component={OrderStatus}/>
        <Route path="/earnings" exact component={MyEranings}/>
		<Route path="/add" exact component={AddProduct}/>
		<Route path="/delete" exact component={DeleteProduct}/>
		<Route path="/update" exact component={UpdateProduct}/>
		</Switch>
		</BrowserRouter>
	</>
	);
};

export default App;