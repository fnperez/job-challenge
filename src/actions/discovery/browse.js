import types from "../types"
import MoviesRepository from "@repositories/movies-repository"
import { addMovies } from "../movies/add";
import { setMovies } from "./add";

export const discover = (searchParams = {}) => (dispatch, _, api) => {
    const repository = new MoviesRepository(api);
    const promise = repository.discover({...searchParams, sort_by: 'popularity.desc'});

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

export const search = (query) => (dispatch, _, api) => {
    if (! query) {
        return dispatch(discover());
    }
    
    const repository = new MoviesRepository(api);
    const promise = repository.search({query});

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