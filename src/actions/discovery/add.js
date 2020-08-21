const { default: types } = require("../types");

export const setMovies = movies => ({
    type: types.DISCOVER_SET,
    payload: movies.map(movie => movie.id)
})