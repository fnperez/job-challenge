import React from 'react';
import MovieListItem from '../MovieListItem';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import './index.scss';

const col = (movie, ...classNames) => (
    <Col className={["MovieList_item", classNames]} key={movie.id}>
        <MovieListItem movie={movie} />
    </Col>
);

const MovieList = ({movies = [], loading, limit = 9, headerTitle, headerLinkTo, headerLinkText}) => {
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

    const featured = movies.shift();
    const items = movies.slice(0, limit - 1).map(col);
    return (
        <div className="MovieList">
            <div className="MovieList_header">
                <div className="MovieList_title">
                    {headerTitle}
                </div>
            </div>
            <Row>
                <Col md={4}>
                    <Row>
                        {col(featured, "MovieList_item--featured")}
                    </Row>
                </Col>
                <Col md={8}>
                    <Row xs={2} md={4}>
                        {items}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MovieList;