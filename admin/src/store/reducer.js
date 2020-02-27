import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../pages/menu/store';
import { reducer as GroupReducer} from '../pages/group/store';

const reducer = combineReducers({
    menu: MenuReducer,
    group: GroupReducer
})

export default reducer;