import Movie from "@entities/movie";

export default class DiscoverRepository {
    constructor(api) {
        this.api = api;
    }

    movies = async (params = {}) => {
        return this
            .api
            .get('discover/movie', params)
            .then(response => response.json.results.map(Movie.fromJson))
    }
}