import React from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk'
import Router from './components/Router';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


render(
  <Provider store={store}>
<Router/>
  </Provider>
  ,
  document.getElementById('root')
);


