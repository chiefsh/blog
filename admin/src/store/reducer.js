import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../pages/menu/store';
import { reducer as GroupReducer} from '../pages/group/store';
import { reducer as TagReducer} from '../pages/tags/store';

const reducer = combineReducers({
    menu: MenuReducer,
    group: GroupReducer,
    tags: TagReducer
})

export default reducer;