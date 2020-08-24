import * as addActions from './add';
import * as browseActions from './browse';

export default ({
    ...addActions,
    ...browseActions
});