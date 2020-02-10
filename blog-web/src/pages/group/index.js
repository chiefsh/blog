import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    GroupWrapper,
    TitleWrapper,
    GroupList,
    UlList,
    GroupItem,
    Title
} from './style';
import {actionCreators} from './store';

class Group extends Component {
    render() {
        const {group_total, group_list} = this.props;
        return(
          <GroupWrapper>
              <TitleWrapper>
              <Title>目前共计{group_total}个分类</Title>
              </TitleWrapper>
              <GroupList>
                  <UlList>
                      {
                          group_list.map((item) => (
                            <GroupItem
                              key={item.get('id')}
                            ><i>{item.get('name')}</i>({item.get('count')})</GroupItem>
                          ))
                      }
                  </UlList>
              </GroupList>
          </GroupWrapper>
        );
    }

    componentDidMount() {
        this.props.getGroups();
    }
}

const mapState = (state) => ({
    group_total: state.getIn(['group', 'group_total']),
    group_list: state.getIn(['group', 'group_list'])
});

const mapDispatch = (dispatch) => ({
    getGroups() {
        dispatch(actionCreators.getGroups());
    }
});

export default connect(mapState, mapDispatch)(Group);