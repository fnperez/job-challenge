import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from 'react-stars'
import './index.scss';
import { convert } from '@lib/rating-utils';

const MovieListItem = ({movie}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    console.log(convert(10, 5)(movie.vote_average));

    return (
        <Card className="MovieListItem" onMouseOver={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
            <Card.Img src={movie.image} alt={movie.title} />
            <Card.ImgOverlay className={["MovieListItem_overlay", showOverlay && 'MovieListItem_overlay--show']} >
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