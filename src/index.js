import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style/main.scss';

import { Router, browserHistory } from 'react-router'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


<Router history={browserHistory} />
render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('root')
)
