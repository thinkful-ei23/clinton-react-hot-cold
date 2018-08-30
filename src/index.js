import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';
import registerServiceWorker from './registerServiceWorker';
import generateNumber from '../generateNumber';

ReactDOM.render(
  <Game secretNumber={generateNumber()}/>,
  document.getElementById('root')
);
registerServiceWorker();
