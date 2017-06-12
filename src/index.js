import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './style/main.scss';

import { Router, browserHistory } from 'react-router'
// export 
import getRoutes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

//官方的react 跟redux 的绑定
import { Provider } from 'react-redux';
import store, { history } from './store';

injectTapEventPlugin();
<Router history={history} />

const router = <Provider store={store}>{getRoutes()}</Provider>

render(
  router, document.getElementById('root')
)
