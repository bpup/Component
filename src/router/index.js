import React from 'react';
import {
	BrowserRouter as Router, 
	Route, 
	Switch, 
	Link} from 'react-router-dom';	
import Hello from 'HELLO';
import Nice from 'NICE';
import Bundle from './Bundle.js'
const Loading = function () {
    return <div>Loading...</div>
};
const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Hello</Link></li>
                <li><Link to="/page1">Nicsdsade</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Hello}/>
                <Route path="/page1" component={Nice}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;