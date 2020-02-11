import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    "currentPage": 1,
    "searchTotal": 0,
    "searchList": []
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_SEARCH:
            return state.merge({
                searchTotal: action.searchTotal,
                searchList: fromJS(action.searchList),
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}