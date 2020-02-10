import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    GroupDetailWrapper,
    Title
} from './style';
import List from '../../common/list';
import {actionCreators} from './store';

class GroupDetail extends Component {
    render() {
        const {groupDetailTotal, groupDetailList, groupName, currentPage, getGroupDetail} = this.props;
        return(
            <GroupDetailWrapper>
              <Title><b>当前分类：</b>{groupName}</Title>
              <List
                article_list={groupDetailList}
                page_total={groupDetailTotal}
                currentPage={currentPage}
                selectPage={getGroupDetail}
                page_size={10}
                id={this.props.match.params.id}
              ></List>
            </GroupDetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getGroupDetail(this.props.match.params.id, this.props.currentPage);
    }

}

const mapState = (state) => ({
    groupName: state.getIn(['groupDetail', 'groupName']),
    groupDetailTotal: state.getIn(['groupDetail', 'groupDetailTotal']),
    currentPage: state.getIn(['groupDetail', 'currentPage']),
    groupDetailList: state.getIn(['groupDetail', 'groupDetailList'])
});

const mapDispatch = (dispatch) => ({
    getGroupDetail(id, page) {
        dispatch(actionCreators.getGroupDetail(id, page));
    }
});

export default connect(mapState, mapDispatch)(GroupDetail);