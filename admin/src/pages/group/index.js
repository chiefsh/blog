import React, {Component} from 'react';
import { Table, Divider } from 'antd';
import {connect} from 'react-redux';
import {
    GroupWrapper,
    AddBtnWrapper,
    AddBtn
} from './style';
import {actionCreators} from './store';


class Group extends Component {
    render() {
        const columns = [
            {
              title: '分类',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
                title: '文章数量',
                dataIndex: 'count',
                key: 'count',
                align: 'center'
              },
            {
              title: '创建日期',
              dataIndex: 'created',
              key: 'created',
            },
            {
              title: '更新日期',
              dataIndex: 'modified',
              key: 'modified',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>编辑</a>
                  <Divider type="vertical" />
                  <a>删除</a>
                </span>
              ),
            },
          ];
        const {total, groupList, currentPage, changePage} = this.props;
        const data = groupList.toJS();
        return (
            <GroupWrapper>
              <AddBtnWrapper>
                <AddBtn>新增</AddBtn>
              </AddBtnWrapper>
              <Table 
                rowKey="id"
                columns={columns} 
                dataSource={data} 
                pagination={{current: currentPage, total: total}}
                onChange={changePage}
              />
            </GroupWrapper>
        );

    }

    componentDidMount(){
        this.props.getGroupList(this.props.currentPage);
    }

}

const mapState = (state) => ({
    total: state.getIn(["group", "total"]),
    groupList: state.getIn(["group", "groupList"]),
    currentPage: state.getIn(["group", "currentPage"])
});

const mapDispatch = (dispatch) => ({
    getGroupList(page) {
        dispatch(actionCreators.getGroupList(page));
    },
    changePage(page) {
        dispatch(actionCreators.getGroupList(page.current));
    }
});

export default connect(mapState, mapDispatch)(Group);