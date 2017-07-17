import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './stores/Store';
import './tool/Config.js';
import App from './views/Main';

 ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

