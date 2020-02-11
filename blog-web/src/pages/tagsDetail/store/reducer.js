import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    "tagName": '',
    "currentPage": 1,
    "tagsDetailTotal": 0,
    "tagsDetailList": [
        {
            "id": '',
            "title": '',
            "created": ''
        }
    ]
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_TAGS_DETAIL:
            return state.merge({
                tagName: action.tagName,
                tagsDetailTotal: action.tagsDetailTotal,
                tagsDetailList: fromJS(action.tagsDetailList),
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}