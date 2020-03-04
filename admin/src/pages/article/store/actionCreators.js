import * as constants from './constants';
import axios from 'axios';

const changeTagList = (total, tagList, currentPage) => ({
    type: constants.CHANGE_TAG_LIST,
    total,
    tagList,
    currentPage
});


export const getTagList = (page) => {
    return (dispatch) => {
        axios.get('/api/tags?size=10&page=' + page).then((res) => {
            const result = res.data;
            dispatch(changeTagList(result.total, result.data, page));
        }).catch(() => {
            console.log('changeTagList error');
        })
    }
}

