import React from 'react';
import MovieListItem from '../MovieListItem';
import Loader from '../Loader';
import { Row, Col, Alert } from 'react-bootstrap';
import './index.scss';
import ReactStars from 'react-stars';

const col = (movie) => (
    <Col className={"MovieList_item"} key={movie.id}>
        <MovieListItem movie={movie} />
    </Col>
);

const MovieList = ({movies = [], loading, headerTitle, filterStars = 0, onFilter}) => {
    const renderList = () => {
        if (! movies.length) {
            return (
                <Alert variant='light'>
                    Nothing to show...
                </Alert>
            );
        }

        const items = movies.map(col);
        return (
            <div className="MovieList_list">
                <Loader hidden={!loading} />
                
                <Row xs={2} md={4}>
                    {items}
                </Row>
            </div>
        )
    }
    
    return (
        <div className="MovieList">
            <div className="MovieList_header">
                <div className="MovieList_title">
                    {headerTitle}
                </div>
                <div className="MovieList_filter">
                    <span>Filter by:</span>
                    <ReactStars 
                        count={5} 
                        size={24}
                        value={filterStars}
                        onChange={stars => stars !== filterStars ? onFilter(stars) : null}
                    />
                </div>
            </div>
            { renderList() }
        </div>
    )
}

export default MovieList;