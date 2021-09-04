import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './login';
import PreviousOrders from './previousorders';
import CurrentOrders from './current';
import ChangeOrderStatus from './changeorder';

const App=()=>{
	return(
	<>
		<BrowserRouter>
      	<Switch>
		<Route path="/" exact component={Dashboard}/>
        <Route path="/previous" exact component={PreviousOrders}/>
        <Route path="/current" exact component={CurrentOrders}/>
        <Route path="/change" exact component={ChangeOrderStatus}/>
		</Switch>
		</BrowserRouter>
	</>
	);
};

export default App;