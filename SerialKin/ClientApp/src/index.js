import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './redux';
import App from './containers/App';
import './styles.scss';

// Create browser history to use in the Redux store

// Get the application-wide store instance, prepopulating with state from the server where available.
// const initialState = window.initialReduxState;
// const store = configureStore(history, initialState);

const rootElement = document.getElementById('root');
window.getState = store.getState;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);

registerServiceWorker();
