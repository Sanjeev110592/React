import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { DataBinding } from './twoWayBinding/TwoWayBinding';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataBinding/>
  </React.StrictMode>
);

reportWebVitals();
