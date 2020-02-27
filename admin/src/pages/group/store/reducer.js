import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    total: 0,
    currentPage: 1,
    groupList: []
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_GROUP_LIST:
            return state.merge({
                total: action.total,
                groupList: fromJS(action.groupList),
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}