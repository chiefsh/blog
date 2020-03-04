import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    tags: [],
    inputVisible: false,
    inputValue: '',
    selectGroup: '',
    content: '',
    groups: [
        {
            id: '',
            name: ''
        }
    ]
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_GROUP_INFO:
            return state.merge({
                groups: fromJS(action.groups)
            });
        case constants.CHANGE_SELECT_GROUP:
            return state.set('selectGroup', action.selectGroup);
        case constants.CHANGE_TAGS_INFO:
            return state.merge({
                tags: fromJS(action.tags)
            });
        case constants.CHANGE_SHOW_INPUT:
            return state.merge({
                inputVisible: action.inputVisible
            });
        case constants.CHANGE_INPUT_VALUE:
            return state.set('inputValue', action.inputValue);
        case constants.CHANGE_TAGS_ALL:
            return state.merge({
                tags: action.tags,
                inputVisible: action.inputVisible,
                inputValue: action.inputValue
            });
        case constants.CHANGE_EDIT_CONTENT:
            return state.set('content', action.content);
        default:
            return state;
    }
}