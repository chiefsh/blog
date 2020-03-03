import * as constants from './constants';
import axios from 'axios';

const changeTagList = (total, tagList, currentPage) => ({
    type: constants.CHANGE_TAG_LIST,
    total,
    tagList,
    currentPage
});


export const getGroupList = (page) => {
    return (dispatch) => {
        axios.get('/api/tags?size=10&page=' + page).then((res) => {
            const result = res.data;
            dispatch(changeTagList(result.total, result.data, page));
        }).catch(() => {
            console.log('changeTagList error');
        })
    }
}

export const resetEditInfo = () => ({
    type: constants.RESET_EDIT_INFO
});

export const addGroup = (value, id) => {
    return(dispatch) => {
        let data;
        if (id.length > 0) {
            data = {name: value, id}
        } else {
            data = {name: value}
        }
        axios.post('/api/group', data).then((res) => {
            dispatch(changeDisplay(true));
        }).catch(() => {
            console.log('addGroup error');
        })
    }
}

export const changeInputValue = (value) => ({
    type: constants.CHANGE_INPUT_VALUE,
    value
});

export const EditInput = (display, groupName, id) => ({
    type: constants.CHANGE_INPUT_CONTENT,
    display,
    groupName,
    id
});

export const handleOk = (id) => {
    return (dispatch) => {
        axios.delete('/api/group').then((res) => {
            dispatch(changeDelVisibleInner(false));
        })
    }
}

export const changeDelVisible = (deleteVisible) => ({
    type: constants.CHANGE_DEL_VISIBLE,
    deleteVisible
});

export const showModal = (deleteVisible, groupName, id) => ({
    type: constants.CHANGE_EDIT_GROUP,
    deleteVisible,
    groupName,
    id
});
