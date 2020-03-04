import React, {Component} from 'react';
import { Table } from 'antd';
import {connect} from 'react-redux';
import {
  TagWrapper
} from './style';
import {actionCreators} from './store';


class Tags extends Component {
    render() {
        const {total, tagList, currentPage, changePage} = this.props;
        const data = tagList.toJS();
        const columns = [
            {
              title: '标签',
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
            }
          ];
        return (
            <TagWrapper>
              <Table 
                rowKey="id"
                columns={columns} 
                dataSource={data} 
                pagination={{current: currentPage, total: total}}
                onChange={changePage}
              />
            </TagWrapper>
        );

    }

    componentDidMount(){
        this.props.getTagList(this.props.currentPage);
    }

}

const mapState = (state) => ({
    total: state.getIn(['tags', 'total']),
    tagList: state.getIn(['tags', 'tagList']),
    currentPage: state.getIn(['tags', 'currentPage'])
});

const mapDispatch = (dispatch) => ({
    changePage(page) {
      dispatch(actionCreators.getTagList(page.current));
    },
    getTagList(page) {
      dispatch(actionCreators.getTagList(page));
    }
});

export default connect(mapState, mapDispatch)(Tags);