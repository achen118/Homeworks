import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const applyMiddlewares = (store, middlewaresList) => {
  let dispatch = store.dispatch;
  middlewaresList.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};

// function addLoggingToDispatch(store) {
//   return function(next) {
//     return function(action) {
//       console.log("Old State:");
//       console.log(store.getState());
//       console.log("Action:");
//       console.log(action);
//       next(action);
//       console.log("New State:");
//       console.log(store.getState());
//     };
//   };
// }

// const addLoggingToDispatch = store => {
//   let dispatch = store.dispatch;
//   return action => {
//     console.log("Old State:");
//     console.log(store.getState());
//     console.log("Action:");
//     console.log(action);
//     dispatch(action);
//     console.log("New State:");
//     console.log(store.getState());
//   };
// };

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
