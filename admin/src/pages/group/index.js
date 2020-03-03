import React, {Component} from 'react';
import { Table, Divider } from 'antd';
import {connect} from 'react-redux';
import {
    GroupWrapper,
    AddBtnWrapper,
    AddBtn
} from './style';
import {actionCreators} from './store';
import Add from './components/add';
import Delete from './components/delete';


class Group extends Component {
    render() {
        const {total, groupList, currentPage, changePage, display, deleteVisible, changeDisplay, EditInput, showModal} = this.props;
        const data = groupList.toJS();
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
              render: (text, record) => {
                return (
                  <span>
                    <a
                      onClick={() => EditInput(true, text['name'], text['id'])}
                    >编辑</a>
                    <Divider type="vertical" />
                    <a
                      onClick={() => showModal(text['name'], text['id'])}
                    >删除</a>
                  </span>
                )
              },
            },
          ];
        console.log(deleteVisible);
        return (
            <GroupWrapper>
              {
                deleteVisible ? <Delete></Delete> : null
              }
              <AddBtnWrapper>
                <AddBtn
                  onClick={() => changeDisplay(true)}
                >新增</AddBtn>
              </AddBtnWrapper>
              {
                display ? <Add></Add> : null
              }
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
    currentPage: state.getIn(["group", "currentPage"]),
    display: state.getIn(["group", "display"]),
    deleteVisible: state.getIn(["group", "deleteVisible"])
});

const mapDispatch = (dispatch) => ({
    getGroupList(page) {
        dispatch(actionCreators.getGroupList(page));
    },
    changePage(page) {
        dispatch(actionCreators.getGroupList(page.current));
    },
    changeDisplay(value) {
        dispatch(actionCreators.changeDisplayNew(value));
    },
    EditInput(display, name, id) {
        dispatch(actionCreators.EditInput(display, name, id));
    },
    showModal(name, id) {
        dispatch(actionCreators.showModal(true, name, id));
    }
});

export default connect(mapState, mapDispatch)(Group);