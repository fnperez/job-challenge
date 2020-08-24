import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from '@lib/connect';
import Loader from '@components/Loader';
import { Container } from 'react-bootstrap';
import routes from '@routes';

export const MovieDetail = props => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    props.movies.find(id)
        .then(movie => {
            setMovie(movie);
            setLoading(false);
        })
        .catch(err => {
            if (err.response.status === 404) {
                history.push(routes.route('NOT_FOUND'));

                return;
            }

            history.push(routes.route('FATAL_ERROR'));
        })

    return (
        <Container>
            { loading ? <Loader /> : movie.title }
        </Container>
    )
}

export default connect()(MovieDetail);