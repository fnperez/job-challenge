import types from "../types"
import DiscoverRepository from "@repositories/discover-repository"
import { addMovies } from "../movies/add";
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