import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../common/menu/store';
import { reducer as HomeReducer} from '../pages/home/store';

const reducer = combineReducers({
  menu: MenuReducer,
  home: HomeReducer
})

export default reducer;