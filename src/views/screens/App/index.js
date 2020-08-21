import React, { Component } from 'react';
import './index.scss';
import { connectScreen } from '@lib/connect-screen';
import { findByIds } from '@lib/entities-utils';
import MovieList from '@components/MovieList';
import Header from '@components/Header';
import { Container } from 'react-bootstrap';
import { MdLocalMovies } from 'react-icons/md';

export class App extends Component {
  state = {
    filtering: false
  };

  componentDidMount() {
    this.props.discovery.discover();
  }

  _filter = (stars) => {
    this.setState({filtering: true});

    setTimeout(() => {
      this.props.discovery.filterByRating(stars)
        .finally(() => this.setState({filtering: false}));
    }, 2000);
    
  }

  render() {
    const { movies, discovery } = this.props.state;

    return (
      <div className="App">
        <Header />
        <Container>
          <MovieList
            headerTitle={<><MdLocalMovies fill="rgb(255, 40, 0)" /> Movies</>}
            onFilter={this._filter}
            filterStars={discovery.filter.stars}
            loading={discovery.request.sending || this.state.filtering} 
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
