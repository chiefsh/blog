import * as constants from './constants';
import axios from 'axios';

const changeGroupList = (total, groupList, currentPage) => ({
    type: constants.CHANGE_GROUP_LIST,
    total,
    groupList,
    currentPage
});

export const getGroupList = (page) => {
    return (dispatch) => {
        axios.get('/api/group?size=10&page=' + page).then((res) => {
            const result = res.data;
            dispatch(changeGroupList(result.total, result.data, page));
        }).catch(() => {
            console.log('getGroupList error');
        })
    }
}
