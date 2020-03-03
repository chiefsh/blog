import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    total: 0,
    currentPage: 1,
    groupList: [],
    display: false,
    deleteVisible: false,
    groupName: '',
    id: ''
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_GROUP_LIST:
            return state.merge({
                total: action.total,
                groupList: fromJS(action.groupList),
                currentPage: action.currentPage
            });
        case constants.CHANGE_DISPLAY:
            return state.set('display', action.display);
        case constants.CHANGE_INPUT_VALUE:
            return state.set('groupName', action.value);
        case constants.CHANGE_INPUT_CONTENT:
            return state.merge({
                display: action.display,
                groupName: action.groupName,
                id: action.id
            });
        case constants.CHANGE_DEL_VISIBLE:
            return state.set('deleteVisible', action.deleteVisible);
        case constants.RESET_EDIT_INFO:
            return state.merge({
                groupName: '',
                id: ''
            });
        case constants.CHANGE_EDIT_GROUP:
            return state.merge({
                deleteVisible: action.deleteVisible,
                groupName: action.groupName,
                id: action.id,
            });
        default:
            return state;
    }
}