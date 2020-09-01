import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import AppContainer from '../containers/AppContainer';

const store = createStore(reducers, applyMiddleware(
  thunk,
));

export const App = () => {
  return (
    <Provider store={store}>
        <AppContainer></AppContainer>
    </Provider>
  );
};
