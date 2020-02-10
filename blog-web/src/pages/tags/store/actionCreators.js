import * as constants from './constants';
import axios from 'axios';

const changeTags = (tag_total, tag_list) => ({
    type: constants.CHANGE_TAGS,
    tag_total,
    tag_list
});

export const getTags = () => {
    return ((dispatch) => {
        axios.get('/api/tags').then((res) => {
            const data = res.data;
            dispatch(changeTags(data.total, data.tag_list))
        }).catch(() => {
            console.log('getTags error ...')
        })
    });
}