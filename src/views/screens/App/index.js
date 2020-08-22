import React, { Component } from 'react';
import './index.scss';
import { connect } from '@lib/connect';
import Header from '@components/Header';
import { Container } from 'react-bootstrap';
import Discovery from '@components/Discovery';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header onSearch={this.props.discovery.search} />
        <Container>
          <Discovery />
        </Container>
      </div>
    );
  }
}

export default connect()(App);
