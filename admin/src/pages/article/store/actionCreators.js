import * as constants from './constants';
import axios from 'axios';

const changeGroupInfo = (groups) => ({
    type: constants.CHANGE_GROUP_INFO,
    groups
});

export const selectGroup = (selectGroup) => ({
    type: constants.CHANGE_SELECT_GROUP,
    selectGroup
});

export const changeTags = (tags) => ({
    type: constants.CHANGE_TAGS_INFO,
    tags
});

export const changeShowInput = (inputVisible) => ({
    type: constants.CHANGE_SHOW_INPUT,
    inputVisible
});

export const changeInputValue = (inputValue) => ({
    type: constants.CHANGE_INPUT_VALUE,
    inputValue
});

export const changeTagsAll = (tags, inputVisible, inputValue) => ({
    type: constants.CHANGE_TAGS_ALL,
    tags,
    inputVisible, 
    inputValue
});

export const getEditContent = (content) => ({
    type: constants.CHANGE_EDIT_CONTENT,
    content
})

export const getGroupInfo = () => {
    return (dispatch) => {
        axios.get('/api/group').then((res) => {
            const data = res.data;
            dispatch(changeGroupInfo(data.data));
        }).catch(() => {
            console.log('get group info error ...');
        })
    }
} 

export const submitArticle = (title, content, group_id, tags) => {
    return (dispatch) => {
        let data = {
            title,
            content,
            group_id,
            tags
        }
        axios.post('/api/article', data).then((res) => {
            console.log('succ');
        }).catch(() => {
            console.log('submitArticl error ...');
        })
    }
}

