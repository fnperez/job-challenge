import { createConstants } from "@lib/redux-utils";

const types = createConstants([
    'DISCOVER_REQUEST',
    'RESET_DISCOVER_REQUEST',
    'DISCOVER_FILTER',
    'RESET_DISCOVER_FILTER',
    'DISCOVER_SET',
    
    'ADD_MOVIES',
    'ADD_MOVIE'
])

export default types;