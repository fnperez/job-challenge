import Home from "@screens/Home";
import MovieDetail from "@screens/MovieDetail";
import FatalError from '@screens/FatalError';
import NotFound from '@screens/NotFound';

const routes = {
    HOME: '/',
    MOVIE_DETAIL: '/movies/:id-:slug',

    NOT_FOUND: '/404',
    FATAL_ERROR: '/500',

    route: (key, params = {}) => {
        let route = routes[key];
    
        Object.keys(params)
            .forEach(key => route = route.replace(`:${key}`, params[key]));

        return route;
    }
}

export const config = [
    {
        key: 'home',
        path: routes.HOME,
        component: Home,
        exact: true
    },
    {
        key: 'movie_detail',
        path: routes.MOVIE_DETAIL,
        component: MovieDetail
    },
    {
        key: 'fatal_error',
        path: routes.FATAL_ERROR,
        component: FatalError
    },
    {
        key: 'not_found',
        component: NotFound,
        status: 404
    }
]

export default routes;