import * as constants from './constants';
import axios from 'axios';

const changeGroups = (group_total, group_list) => ({
    type: constants.CHANGE_GROUPS,
    group_total,
    group_list
});

export const getGroups = () => {
    return ((dispatch) => {
        axios.get('/api/groups').then((res) => {
            const data = res.data;
            dispatch(changeGroups(data.total, data.group_list));
        }).catch(() => {
            console.log('get groups error ...');
        })
    });
}

