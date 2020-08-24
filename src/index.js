import React from 'react';
import { render } from 'react-dom';
import './overrides';
import '@styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Root from '@screens/root';

render(
  <Root store={store} />
  ,
  document.getElementById('root')
);

serviceWorker.register();