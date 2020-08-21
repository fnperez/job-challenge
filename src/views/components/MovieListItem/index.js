import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './index.scss';

const MovieListItem = ({movie}) => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <Card className="MovieListItem" onMouseOver={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
            <Card.Img src={movie.image} alt={movie.title} />
            <Card.ImgOverlay className={["MovieListItem_overlay", showOverlay && 'MovieListItem_overlay--show']} >
                <Card.Text as="span">{movie.release_date.format('Y')}</Card.Text>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.vote_average}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default MovieListItem;