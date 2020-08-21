import React, { Component } from 'react';
import './index.scss';
import { connectScreen } from '@lib/connect-screen';
import { findByIds } from '@lib/entities-utils';
import MovieList from '@components/MovieList';
import Header from '@components/Header';
import { Container } from 'react-bootstrap';
import { FaGripfire } from 'react-icons/fa';

export class App extends Component {
  componentDidMount() {
    const { success } = this.props.state.discovery;

    if (! success)
      this.props.movies.discover();
  }

  render() {
    const { movies, discovery } = this.props.state;

    return (
      <div className="App">
        <Header />
        <Container>
          <MovieList
            headerTitle={<><FaGripfire fill="rgb(255, 40, 0)" /> Popular movies</>}
            headerLinkTo="/"
            headerLinkText="View all"
            loading={discovery.sending} 
            movies={findByIds(movies, discovery.ids)} 
          />
        </Container>
      </div>
    );
  }
}

export default connectScreen(state => ({
  state: {
    movies: state.entities.movies,
    discovery: state.ui.discovery,
  }
}))(App);
