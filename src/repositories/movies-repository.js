import Movie from "@entities/movie";
import qs from 'qs';

export default class MoviesRepository {
    constructor(api) {
        this.api = api;
    }

    discover = async (params = {}) => {
        const queryString = qs.stringify(params);

        return this
            .api
            .get(`discover/movie?${queryString}`)
            .then(response => response.json.results.map(Movie.fromJson))
    }

    search = async (params = {}) => {
        const queryString = qs.stringify(params);

        return this
            .api
            .get(`search/movie?${queryString}`)
            .then(response => response.json.results.map(Movie.fromJson))
    }

    find = async (id) => {
        return this
            .api
            .get(`/movie/${id}`)
            .then(response => Movie.fromJson(response.json))
    }
}