import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(configureStore);

const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
