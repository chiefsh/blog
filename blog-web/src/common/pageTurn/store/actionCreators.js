import * as constants from './constants';
import axios from 'axios';

const changeArticleList = (currentPage, total, articleList) => ({
    type: constants.CHANGE_ARTICLE_LIST,
    currentPage: currentPage,
    total: total,
    articleList: articleList
});

export const selectPage = (currentPage) => {
    return (dispatch) => {
        axios.get('/api/articleList?page=' + currentPage).then((res) => {
            const data = res.data;
            const total = data.total;
            const articleList = data.articleList;
            dispatch(changeArticleList(currentPage, total, articleList));
        }).catch(() => {
            console.log('getActicleList error')
        });
    }
}

