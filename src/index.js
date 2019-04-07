import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter, addGun, remGun, addGunAsync} from './index.redux'
import App from './App';

const store = createStore(counter, applyMiddleware(thunk));

ReactDOM.render(
    (
        <Provider store={store}>
            <App/>
        </Provider>
    ),
    document.getElementById('root')
);
