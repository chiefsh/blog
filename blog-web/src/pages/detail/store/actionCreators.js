import * as constants from './constants';
import axios from 'axios';

const changeDetail = (article, previous, next) => ({
    type: constants.CHANGE_DETAIL,
    article,
    previous,
    next
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail?id=' + id).then((res) => {
            const data = res.data;
            dispatch(changeDetail(data.article, data.previous, data.next));
        }).catch(() => {
            console.log('getDetail error');
        })
    }
}

