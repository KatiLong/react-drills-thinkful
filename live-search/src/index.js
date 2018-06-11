import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from './components/live-search';
import peaks from './peaks.json';
import './index.css';

//import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LiveSearch characters={peaks} />, document.getElementById('root'));
registerServiceWorker();
