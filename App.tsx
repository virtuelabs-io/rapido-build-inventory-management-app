import React from 'react';
import AppNavigation from './src/index';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { CoreReduxInitialState } from './src/store/core/data';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation core={CoreReduxInitialState} />
    </Provider>
  );
}