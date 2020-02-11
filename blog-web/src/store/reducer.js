import { combineReducers } from 'redux-immutable';
import { reducer as MenuReducer} from '../common/menu/store';
import { reducer as HomeReducer} from '../pages/home/store';
import { reducer as DetailReducer} from '../pages/detail/store';
import { reducer as TagsReducer} from '../pages/tags/store';
import { reducer as GroupReducer} from '../pages/group/store';
import { reducer as GroupDetailReducer} from '../pages/groupDetail/store';
import { reducer as TagsDetailReducer} from '../pages/tagsDetail/store';
import { reducer as SearchReducer} from '../pages/search/store';

const reducer = combineReducers({
  menu: MenuReducer,
  home: HomeReducer,
  detail: DetailReducer,
  tags: TagsReducer,
  group: GroupReducer,
  groupDetail: GroupDetailReducer,
  tagsDetail: TagsDetailReducer,
  search: SearchReducer
})

export default reducer;