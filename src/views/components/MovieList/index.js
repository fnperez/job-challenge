import React from 'react';
import MovieListItem from '../MovieListItem';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import './index.scss';

const col = (movie) => (
    <Col className={"MovieList_item"} key={movie.id}>
        <MovieListItem movie={movie} />
    </Col>
);

const MovieList = ({movies = [], loading, headerTitle}) => {
    if (loading) {
        return (
            <Spinner animation="grow" />
        )
    }

    if (! movies.length) {
        return (
            <Alert variant='light'>
                Nothing to show...
            </Alert>
        );
    }

    const items = movies.map(col);
    return (
        <div className="MovieList">
            <div className="MovieList_header">
                <div className="MovieList_title">
                    {headerTitle}
                </div>
            </div>
            <Row xs={2} md={4}>
                {items}
            </Row>
        </div>
    )
}

export default MovieList;