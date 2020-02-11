import * as constants from './constants';
import axios from 'axios';

const changeSearch = (searchTotal, searchList, currentPage) => ({
    type: constants.CHANGE_SEARCH,
    searchTotal,
    searchList,
    currentPage
});

export const getSearch = (keyword, page) => {
    return (dispatch) => {
        axios.get('/api/search?keyword=' + keyword + '&page=' + page).then((res) => {
            const data = res.data;
            dispatch(changeSearch(data.total, data.data, page));
        }).catch(() => {
            console.log('changeSearch error');
        })
    }
}

