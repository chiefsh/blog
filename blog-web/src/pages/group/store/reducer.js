import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    "group_total": 0,
    "group_list": [
        {
            "id": 1,
            "name": '',
            "count": 0
        }
    ]
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_GROUPS:
            return state.merge({
                group_total: action.group_total,
                group_list: fromJS(action.group_list)
            });
        default:
            return state;
    }
}