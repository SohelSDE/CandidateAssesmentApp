import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/rootSagas';
import rootReducers from './Reducers/rooReducer';
const sagaMiddleWare= createSagaMiddleware()
const store = createStore(rootReducers,applyMiddleware(sagaMiddleWare))
const root = ReactDOM.createRoot(document.getElementById('root'));
sagaMiddleWare.run(rootSaga)
root.render(
     <Router>
    <Provider store={store}>

    <App />
    </Provider>
    </Router>

);


