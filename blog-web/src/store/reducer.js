import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../common/menu/store';

const reducer = combineReducers({
  menu: MenuReducer,
})

export default reducer;