import * as constants from './constants';

export const menu_select = (item) => {
    switch(item) {
        case 'group':
            return {
                type: constants.MENU_SELECTED,
                homeSelected: false,
                groupSelected: true,
                tagSelected: false
            };
        case 'tag':
                return {
                    type: constants.MENU_SELECTED,
                    homeSelected: false,
                    groupSelected: false,
                    tagSelected: true
                };
        default:
            return {
                type: constants.MENU_SELECTED,
                homeSelected: true,
                groupSelected: false,
                tagSelected: false
            };
    }
}