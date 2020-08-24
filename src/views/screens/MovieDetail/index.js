import React, { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from '@lib/connect';
import Loader from '@components/Loader';
import { Container, Image, Row, Col } from 'react-bootstrap';
import routes from '@routes';
import './index.scss';
import ReactStars from 'react-stars';
import { convert } from '@lib/rating-utils';

export const MovieDetail = props => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (movie) {
            document.title = `Movies | ${movie.original_title}`;
        }
        
    }, [movie]);

    props.movies.find(id)
        .then(movie => {
            setMovie(movie);
            setLoading(false);

        })
        .catch(err => {
            if (err.response && err.response.status === 404) {
                history.push(routes.route('NOT_FOUND'));

                return;
            }

            history.push(routes.route('FATAL_ERROR'));
        })

    const renderMovie = () => (
        <>
            <div className="MovieDetail_header">
                <Image src={movie.backdrop()} />
            </div>
            <Container className="MovieDetail_body">
                <Row>
                    <Col sm={6}>
                        <Image src={movie.poster('normal')} className="MovieDetail_poster" />
                    </Col>
                    <Col sm={6}>
                        <div className="MovieDetail_details">
                            <h1 className="MovieDetail_title">{movie.title} <span>({convert(10, 5)(movie.vote_average)})</span></h1>
                            <ReactStars
                                count={5}
                                size={24}
                                value={convert(10, 5)(movie.vote_average)}
                                edit={false}
                            />
                            <p className="MovieDetail_subtitle">Realease: {movie.release_date.format('MM/DD/Y')}</p>
                            
                            <i>{movie.overview}</i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )

    return (
        <div className="MovieDetail">
            { loading ? <Loader /> : renderMovie() }
        </div>
    )
}

export default connect()(MovieDetail);