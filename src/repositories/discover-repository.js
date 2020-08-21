import Movie from "@entities/movie";
import qs from 'qs';

export default class DiscoverRepository {
    constructor(api) {
        this.api = api;
    }

    movies = async (params = {}) => {
        const queryString = qs.stringify(params);

        return this
            .api
            .get(`discover/movie?${queryString}`)
            .then(response => response.json.results.map(Movie.fromJson))
    }
}