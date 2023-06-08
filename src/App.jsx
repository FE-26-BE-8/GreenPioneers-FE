import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux';
import Register from './components/Register';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Register />
    </Provider>
  );
};

export default App;
