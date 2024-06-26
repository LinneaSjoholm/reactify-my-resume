import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './styles/index.css'

import { Provider } from 'react-redux'
import rootReducer from './reducer/main.js'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
);
