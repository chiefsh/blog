import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleSelect: true,
    groupSelect: false,
    tagSelect: false
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.MENU_SELECT:
            return state.merge({
                articleSelect: action.articleSelect,
                groupSelect: action.groupSelect,
                tagSelect: action.tagSelect
            });
        default:
            return state;
    }
}