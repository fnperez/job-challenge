import moviesActions from './movies'
import { bindActionCreators } from 'redux';

const ActionsCreator = dispatch => ({
    movies: bindActionCreators(moviesActions, dispatch)
})

export default ActionsCreator;