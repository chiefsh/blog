import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    articleList: [],
    total: 0,
    currentPage: 1
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_ARTICLE_LIST:
            return state.merge({
                articleList: fromJS(action.articleList),
                total: action.total,
                currentPage: action.currentPage
            });
        default:
            return state;
    }
}