import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ContactInfo from './components/ContactInfo';

export default function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1>Contact Us</h1>
        <ContactInfo />
      </div>
    </Provider>
  );
}
