import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    tag_total: 0,
    tag_list: [
        {
            "id": 1,
            "name": '',
            "count": 0
        }
    ]
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TAGS:
            return state.merge({
                tag_total: action.tag_total,
                tag_list: fromJS(action.tag_list)
            });
        default:
            return state;
    }
}