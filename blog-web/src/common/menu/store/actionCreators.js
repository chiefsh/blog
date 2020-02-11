import * as constants from './constants';
import axios from 'axios';

const getAccount = (headImgUrl, userName, userSignature, articleCount, groupCount, tagCount) => ({
    type: constants.ACCOUNT_INFO,
    headImgUrl, 
    userName, 
    userSignature, 
    articleCount, 
    groupCount, 
    tagCount
});

export const getAccountInfo = () => {
    return((dispatch) => {
        axios.get('/api/account').then((res) => {
            const data = res.data.data;
            dispatch(getAccount(data.headImgUrl, data.userName, data.userSignature, data.articleCount, data.groupCount, data.tagCount));
        }).catch(() => {
            console.log("get account error ...")
        })
    });
}

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