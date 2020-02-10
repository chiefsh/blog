import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    "groupName": '',
    "currentPage": 1,
    "groupDetailTotal": 0,
    "groupDetailList": [
        {
            "id": '',
            "title": '',
            "created": ''
        }
    ]
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_GROUP_DETAIL:
            return state.merge({
                groupName: action.groupName,
                groupDetailTotal: action.groupDetailTotal,
                groupDetailList: fromJS(action.groupDetailList),
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}