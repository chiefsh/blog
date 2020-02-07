import { fromJS } from 'immutable';
import * as constants from './constants';
import axios from 'axios';

const changeArticleList = (currentPage, total, articleList) => ({
    type: constants.CHANGE_ARTICLE_LIST,
    currentPage: currentPage,
    total: total,
    articleList: fromJS(articleList)
});

export const getActicleList = (currentPage) => {
    return (dispatch) => {
        axios.get('/api/articleList?page=' + currentPage).then((res) => {
            const total = res.data.total;
            const articleList = res.data.articleList;
            dispatch(changeArticleList(currentPage, total, articleList));
        }).catch(() => {
            console.log('getActicleList error')
        });
    }
}

