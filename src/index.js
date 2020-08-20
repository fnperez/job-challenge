import React from 'react';
import { render } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import '@styles/global.css';
import App from '@screens/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store, persistor } from './store';

render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
