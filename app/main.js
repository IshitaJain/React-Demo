import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import { hashHistory } from 'react-router'
import Hello from './component.jsx';
import MyVacation from './myVacation/myVacation.jsx';
import Error404 from './404/Error404.jsx';

function main() {
    console.log('in main and this is app id DOM element' + document.getElementById('app'));
    ReactDOM.render((<Router history={hashHistory}>
            <Route path="/" component={Hello} />
            <Route path="/my-vacations" component={MyVacation} />
            <Route path="*" component={ Error404 }/>
        </Router>),
        document.getElementById('app'));
}

main();