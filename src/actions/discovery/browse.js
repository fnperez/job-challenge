import types from "../types"
import DiscoverRepository from "@repositories/discover-repository"
import { addMovies } from "../movies/add";
import { findByIds } from "@lib/entities-utils";
import { convert } from '@lib/rating-utils';
import { setMovies } from "./add";

export const discover = (searchParams = {}) => (dispatch, _, api) => {
    const repository = new DiscoverRepository(api);
    const promise = repository.movies({...searchParams, sort_by: 'popularity.desc'});

    return dispatch({
        type: types.DISCOVER_REQUEST,
        promise: promise.then(movies => {
            dispatch(addMovies(movies))
            dispatch(setMovies(movies));

            return {
                ids: movies.map(movie => movie.id)
            }
        })
    }); 
}

const filter = async (stars, state, dispatch) => {
    const ids = state.ui.discovery.request.ids;
    const movies = findByIds(state.entities.movies, ids)
                    .filter(movie => convert(10, 5)(movie.vote_average) === stars);

    dispatch(setMovies(movies));
    
    return {
        stars
    }
}

export const filterByRating = (stars) => (dispatch, store) => {
    const state = store();

    return dispatch({
        type: types.DISCOVER_FILTER,
        promise: filter(stars, state, dispatch)
    })
}