import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { config } from '@routes';

export default class Root extends Component {
    componentDidMount() {
        document.title = 'Movies';
    }

    render = () => {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <Switch>
                        { config.map(props => <Route {...props} />)}
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
