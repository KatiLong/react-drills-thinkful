import React from 'react';
import ReactDOM from 'react-dom';
import RateCalculator from './components/rate-calculator';
import './index.css';

//import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < RateCalculator / > , document.getElementById('root'));
registerServiceWorker();
