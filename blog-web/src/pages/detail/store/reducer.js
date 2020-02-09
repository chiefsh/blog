import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    article: {
        "id": '',
        "title": '',
        "created": '',
        "grounp": {
            "id": '',
            "name": ''
        },
        "content": "",
        "reply_count": 0,
        "view_count": 0,
        "author": ''
    },
    previous: {
        "id": '',
        "title": ''
    },
    next: {
        "id": '',
        "title": ''
    }
});
  
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                article: fromJS(action.article),
                previous: fromJS(action.previous),
                next: fromJS(action.next),
            });
        default:
            return state;
    }
}