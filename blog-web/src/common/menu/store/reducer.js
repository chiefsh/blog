import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    homeSelected: true,
    groupSelected: false,
    tagSelected: false,
    searchSelected: false,
    headImgUrl: 'https://ww4.sinaimg.cn/thumb180/63ae8f44ly1gbkdadedkkj22801o07wi.jpg',
    userName: 'Chiefsh',
    userSignature: '心安理得，混吃等死',
    articleCount: 188,
    groupCount: 6,
    tagCount: 30
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.MENU_SELECTED:
            return state.merge({
                homeSelected: action.homeSelected,
                groupSelected: action.groupSelected,
                tagSelected: action.tagSelected,
                searchSelected: action.searchSelected
            });
        case constants.ACCOUNT_INFO:
            return state.merge({
                headImgUrl: action.headImgUrl,
                userName: action.userName,
                userSignature: action.userSignature,
                articleCount: action.articleCount,
                groupCount: action.groupCount,
                tagCount: action.tagCount
            })
        default:
            return state;
    }
}