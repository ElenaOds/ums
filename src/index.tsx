import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { UserProvider } from './context/UserContext';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>  
      <UserProvider>
        <BrowserRouter basename="ums">
          <App />
        </BrowserRouter>
      </UserProvider>
    </Provider>
  </React.StrictMode>
);

