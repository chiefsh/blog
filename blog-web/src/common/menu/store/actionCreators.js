import * as constants from './constants';

export const menu_select = (item) => {
    switch(item) {
        case 'group':
            return {
                type: constants.MENU_SELECTED,
                homeSelected: false,
                groupSelected: true,
                tagSelected: false,
                searchSelected: false
            };
        case 'tag':
                return {
                    type: constants.MENU_SELECTED,
                    homeSelected: false,
                    groupSelected: false,
                    tagSelected: true,
                    searchSelected: false
                };
        case 'search':
            return {
                type: constants.MENU_SELECTED,
                homeSelected: false,
                groupSelected: false,
                tagSelected: false,
                searchSelected: true
            };
        default:
            return {
                type: constants.MENU_SELECTED,
                homeSelected: true,
                groupSelected: false,
                tagSelected: false,
                searchSelected: false
            };
    }
}