import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import news from "./store/reducers/newsReducer";
import loading from "./store/reducers/loadingReducer";
import fullArticle from "./store/reducers/fullArticleReducer";
import cart from "./store/reducers/cartReducer";
import loginStatus from "./store/reducers/loginReducer";
import products from "./store/reducers/productsReducer";
import modal from "./store/reducers/modalReducer";
import axios from "axios";


const rootReducer = combineReducers({ loading, news, fullArticle, cart, loginStatus, products, modal });

// function configureStore(preloadedState) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     applyMiddleware(thunkMiddleware)
//   );
// }

// const store = configureStore();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const token = localStorage.getItem("token")
if(token){
  axios.get("http://localhost:5000/get_user", {
    params: {
      token: token
    }
  }).then(res =>
    store.dispatch({
    type: "ALREADY_AUTH",
    user: res.data
  })
)
  
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot){
  module.hot.accept();
}

