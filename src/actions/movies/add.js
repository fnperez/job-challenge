import types from "../types";

export const addMovies = (movies) => ({
    type: types.ADD_MOVIES,
    payload: movies,
})

export const addMovie = (movie) => ({
    type: types.ADD_MOVIE,
    payload: movie
})