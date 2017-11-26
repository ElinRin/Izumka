import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import reducers from './reducers';
import Layout from './containers/layout';
import Info from './containers/info';
import Complete from './containers/complete/'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/request/:type' component={Layout} />
            <Route path='/info' component={Info} />
            <Route path='/complete' component={Complete} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
