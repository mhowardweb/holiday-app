import React from 'react';
import { Provider } from 'react-redux';
import TabNavigation from './components/tabNavigation';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <TabNavigation />
  </Provider>
);

export default App;
