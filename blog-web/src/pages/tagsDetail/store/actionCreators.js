import * as constants from './constants';
import axios from 'axios';

const changeTagsDetail = (tagsDetailTotal, tagsDetailList, tagName, currentPage) => ({
    type: constants.CHANGE_TAGS_DETAIL,
    tagsDetailTotal,
    tagsDetailList,
    tagName,
    currentPage
});

export const getTagsDetail = (id, page) => {
    return (dispatch) => {
        axios.get('/api/tagsDetail?id=' + id + '&page=' + page).then((res) => {
            const data = res.data;
            dispatch(changeTagsDetail(data.total, data.data, data.tag_name, page));
        }).catch(() => {
            console.log('getTagsDetail error');
        })
    }
}

