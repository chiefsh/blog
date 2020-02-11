import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    tagsDetailWrapper,
    Title
} from './style';
import List from '../../common/list';
import {actionCreators} from './store';

class TagsDetail extends Component {
    render() {
        const {tagsDetailTotal, tagsDetailList, tagName, currentPage, getTagsDetail} = this.props;
        return(
            <tagsDetailWrapper>
              <Title><b>当前标签：</b>{tagName}</Title>
              <List
                article_list={tagsDetailList}
                page_total={tagsDetailTotal}
                currentPage={currentPage}
                selectPage={getTagsDetail}
                page_size={10}
                id={this.props.match.params.id}
              ></List>
            </tagsDetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getTagsDetail(this.props.match.params.id, this.props.currentPage);
    }

}

const mapState = (state) => ({
    tagName: state.getIn(['tagsDetail', 'tagName']),
    tagsDetailTotal: state.getIn(['tagsDetail', 'tagsDetailTotal']),
    currentPage: state.getIn(['tagsDetail', 'currentPage']),
    tagsDetailList: state.getIn(['tagsDetail', 'tagsDetailList'])
});

const mapDispatch = (dispatch) => ({
    getTagsDetail(id, page) {
        dispatch(actionCreators.getTagsDetail(id, page));
    }
});

export default connect(mapState, mapDispatch)(TagsDetail);