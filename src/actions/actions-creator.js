import moviesActions from './movies'
import discoveryActions from './discovery'
import { bindActionCreators } from 'redux';

const ActionsCreator = dispatch => ({
    movies: bindActionCreators(moviesActions, dispatch),
    discovery: bindActionCreators(discoveryActions, dispatch)
})

export default ActionsCreator;