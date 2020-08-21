import types from "@actions/types";

const addMovies = (movies, state) => {
    let newState = {
        ...state,
    };

    movies.forEach(movie => {
        newState = addMovie(movie, newState)
    });

    return newState;
}

const addMovie = (movie, state) => Object.assign(state, {[movie.id]: movie});

export function movies(state = {}, action) {
    switch(action.type) {
        case types.ADD_MOVIES:
            return addMovies(action.payload, state);
        case types.ADD_MOVIE:
            return addMovie(action.payload, state);
        default:
            return state;
    }
}