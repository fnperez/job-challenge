import MoviesRepository from '@repositories/movies-repository';
import { byId } from '@lib/entities-utils';
import { addMovie } from './add';

export const find = id => (dispatch, store, api) => {
    const { movies } = store().entities;
    const movie = byId(movies, id);

    if (movie) {
        return Promise.resolve(movie);
    }
    
    const repository = new MoviesRepository(api);

    return repository.find(id)
        .then(movie => {
            dispatch(addMovie(movie));

            return movie;
        })
}