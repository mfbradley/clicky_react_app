import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
