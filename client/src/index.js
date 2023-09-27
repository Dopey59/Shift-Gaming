import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import('preline');

const root = ReactDOM.createRoot(document.getElementById('root'));
// // Polyfill for closest() method
// if (!Element.prototype.closest) {
//   Element.prototype.closest = function (selector) {
//     var el = this;
//     while (el) {
//       if (el.matches(selector)) {
//         return el;
//       }
//       el = el.parentElement;
//     }
//     return null;
//   };
// }

root.render(
  <BrowserRouter>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CookiesProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
