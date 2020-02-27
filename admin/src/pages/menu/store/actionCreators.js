import * as constants from './constants';
// import axios from 'axios';

export const selectItem = (num) => {
    let articleSelect;
    let groupSelect;
    let tagSelect;
    if (num === 1) {
        articleSelect = true;
        groupSelect = false;
        tagSelect = false;
    }else if (num === 2) {
        articleSelect = false;
        groupSelect = true;
        tagSelect = false;
    }else {
        articleSelect = false;
        groupSelect = false;
        tagSelect = true;
    }
    return {
        type: constants.MENU_SELECT,
        articleSelect,
        groupSelect,
        tagSelect
    }
}
