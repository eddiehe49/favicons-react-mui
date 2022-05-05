import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';

// ReactDOM.render(
//   <React.StrictMode>
//     <SnackbarProvider maxSnack={3} anchorOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}>
//       <Router />
//     </SnackbarProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>
      <Router />
    </SnackbarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
