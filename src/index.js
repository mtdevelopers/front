import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import uiReducer from "./redux/reducer/uiReducer";
import sidemenuReducer from "./redux/reducer/sidemenuReducer";
import authReducer from "./redux/reducer/authReducer";
import countryReducer from "./redux/reducer/setting-location/countryReducer";
import locationReducer from "./redux/reducer/setting-location/locationReducer";
import subLocationReducer from "./redux/reducer/setting-sublocation/sublocationReducer";
import { createStore, combineReducers, compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//middleWare
const logger = (store) => {
  return next => {
    return (action) => {
      console.log('middleware',action);
      next(action);
    }
  }
};

//combining REDUCERS
const rootReducer = combineReducers({
  sidemenu:sidemenuReducer,
  ui:uiReducer,
  auth:authReducer,
  location:locationReducer,
  country:countryReducer,
  subLocation:subLocationReducer
});

//CREATE STORE
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
