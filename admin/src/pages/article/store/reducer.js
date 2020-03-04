import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    total: 0,
    currentPage: 1,
    tagList: []
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TAG_LIST:
            return state.merge({
                total: action.total,
                tagList: fromJS(action.tagList),
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}