import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

ReactDOM.render(
<<<<<<< HEAD

    <App />,
=======
    <Router>
        <Provider store = {store}>
            <App />
        </Provider>
    </Router>
    ,
>>>>>>> 987375d7c83eae661bc7e0ac4b6862bc811c1e40
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
