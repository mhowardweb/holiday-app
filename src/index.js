import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ion-app>
    <App />
  </ion-app>,
  document.getElementById('root'),
);
registerServiceWorker();
