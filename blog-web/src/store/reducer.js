import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../common/menu/store';
import { reducer as HomeReducer} from '../pages/home/store';
import { reducer as DetailReducer} from '../pages/detail/store';
import { reducer as TagsReducer} from '../pages/tags/store';
import { reducer as GroupReducer} from '../pages/group/store';

const reducer = combineReducers({
  menu: MenuReducer,
  home: HomeReducer,
  detail: DetailReducer,
  tags: TagsReducer,
  group: GroupReducer
})

export default reducer;