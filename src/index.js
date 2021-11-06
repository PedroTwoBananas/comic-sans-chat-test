import React from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk'
import Router from './components/Router';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : a => a

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  devTools
));


render(
  <Provider store={store}>
<Router/>
  </Provider>
  ,
  document.getElementById('root')
);


