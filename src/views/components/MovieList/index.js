import React, { PureComponent } from 'react';
import MovieListItem from '../MovieListItem';
import Loader from '../Loader';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import './index.scss';
import ReactStars from 'react-stars';
import { convert } from '@lib/rating-utils';
import { BsFillTrashFill } from 'react-icons/bs';

class MovieList extends PureComponent {
    state = {
        movies: [],
        filtered: [],
        stars: 0,
        loading: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            const {movies, loading} = this.props;

            this.setState({movies, filtered: movies, stars: 0, loading});
        }
    }

    renderItem = (movie) => (
        <Col className={"MovieList_item"} key={movie.id} hidden={movie.hidden}>
            <MovieListItem movie={movie} />
        </Col>
    )

    renderList = () => {
        const { filtered } = this.state;

        if (! filtered.length) {
            return (
                <Alert variant='light'>
                    Nothing to show...
                </Alert>
            );
        }

        const items = filtered.map(this.renderItem);
        return (
            <Row xs={2} md={4}>
                {items}
            </Row>
        )
    }

    _reset = () => this.setState({
        filtered: this.state.movies,
        stars: 0,
        loading: false,
    });

    _filter = (stars) => {
        if (stars === this.state.stars) return;
        
        this.setState({loading: true, stars});

        setTimeout(() => {
            const { movies } = this.state;
        
            const filtered = movies.filter(movie => convert(10, 5)(movie.vote_average) === stars);
    
            this.setState({
                filtered,
                loading: false,
            });
        }, 400)
    }
    
    render() {
        const { headerTitle } = this.props;
        const { loading, stars } = this.state;

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
                            edit={!loading}
                            value={stars}
                            onChange={this._filter}
                        />
                        <Button style={{ marginLeft: 5 }} variant="dark" onClick={this._reset}>
                            <BsFillTrashFill />
                        </Button>
                    </div>
                </div>
                <div className="MovieList_list">
                    { loading ? <Loader hidden={!loading} /> : null }
                    <div className={"fade " + (!loading ? 'show' : null)} >
                        { this.renderList() }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieList;