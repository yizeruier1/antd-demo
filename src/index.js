import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducers';
import thunk from 'redux-thunk';
import '@/assets/css/index.css'

//创建store
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);