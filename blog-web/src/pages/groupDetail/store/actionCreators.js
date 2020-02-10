import * as constants from './constants';
import axios from 'axios';

const changeGroupDetail = (groupDetailTotal, groupDetailList, groupName, currentPage) => ({
    type: constants.CHANGE_GROUP_DETAIL,
    groupDetailTotal,
    groupDetailList,
    groupName,
    currentPage
});

export const getGroupDetail = (id, page) => {
    return (dispatch) => {
        axios.get('/api/groupDetail?id=' + id + '&page=' + page).then((res) => {
            const data = res.data;
            dispatch(changeGroupDetail(data.total, data.data, data.group_name, page));
        }).catch(() => {
            console.log('getDetail error');
        })
    }
}

