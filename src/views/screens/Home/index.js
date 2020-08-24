import React, { Component } from 'react';
import { connect } from '@lib/connect';
import Header from '@components/Header';
import { Container } from 'react-bootstrap';
import Discovery from '@components/Discovery';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header onSearch={this.props.discovery.search} />
        <Container>
          <Discovery />
        </Container>
      </div>
    );
  }
}

export default connect()(Home);
