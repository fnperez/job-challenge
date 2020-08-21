import types from "../types"
import DiscoverRepository from "@repositories/discover-repository"
import { addMovies } from "./add";

export const discover = (searchParams = {}) => (dispatch, _, api) => {
    const repository = new DiscoverRepository(api);
    const promise = repository.movies(searchParams);

    return dispatch({
        type: types.DISCOVER_REQUEST,
        promise: promise.then(movies => {
            dispatch(addMovies(movies))

            return {
                ids: movies
                    .sort((movieA, movieB) => movieB.vote_average - movieA.vote_average)
                    .map(movie => movie.id)
            }
        })
    }); 
}