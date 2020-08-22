import React, { Component } from 'react';
import { connect } from '@lib/connect';
import MovieList from '../MovieList';
import {MdLocalMovies} from 'react-icons/md';
import { findByIds } from '@lib/entities-utils';

export class Discovery extends Component {
    componentDidMount() {
        this.props.discovery.discover();
    }

    render() {
        const { movies, discovery } = this.props.state;

        return (
            <MovieList
                headerTitle={<><MdLocalMovies fill="rgb(255, 40, 0)" /> Movies</>}
                loading={discovery.request.sending}
                movies={findByIds(movies, discovery.ids)}
            />
        )
    }
}

export default connect(state => ({
    state: {
        discovery: state.ui.discovery,
        movies: state.entities.movies,
    }
}))(Discovery);