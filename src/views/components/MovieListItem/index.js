import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-stars'
import './index.scss';
import { convert } from '@lib/rating-utils';
import routes from '@routes';
import { Link } from 'react-router-dom';

const MovieListItem = ({movie}) => {
    return (
        <Card className="MovieListItem" as={Link} to={routes.route('MOVIE_DETAIL', {id: movie.id})}>
            <Card.Img src={movie.image} alt={movie.title} />
            <Card.ImgOverlay className="MovieListItem_overlay">
                <Card.Text as="span">{movie.release_date.format('Y')}</Card.Text>
                <Card.Title>{movie.title}</Card.Title>
                <ReactStars
                    count={5}
                    size={30}
                    value={convert(10, 5)(movie.vote_average)}
                    edit={false}
                />
            </Card.ImgOverlay>
        </Card>
    )
}

export default MovieListItem;