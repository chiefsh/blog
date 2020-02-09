import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../common/menu/store';
import { reducer as HomeReducer} from '../pages/home/store';
import { reducer as DetailReducer} from '../pages/detail/store';

const reducer = combineReducers({
  menu: MenuReducer,
  home: HomeReducer,
  detail: DetailReducer
})

export default reducer;