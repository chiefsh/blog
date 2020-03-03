import React, {Component} from 'react';
import { Modal} from 'antd';
import {connect} from 'react-redux';
import { actionCreators } from '../../store';

class Delete extends Component {
    render() {
        const {groupName, deleteVisible, id, handleOk, handleCancel} = this.props;
        return(
            <Modal
            title="提示"
            visible={deleteVisible}
            onOk={() => handleOk(id)}
            onCancel={handleCancel}
            >
              <p>确定删除: {groupName}？</p>
            </Modal>
        );
    }
}

const mapState = (state) => ({
    deleteVisible: state.getIn(['group', 'deleteVisible']),
    groupName: state.getIn(['group', 'groupName']),
    id: state.getIn(['group', 'id'])
});

const mapDispatch = (dispatch) => ({
    handleOk(e, id) {
        dispatch(actionCreators.handleOk(id));
        dispatch(actionCreators.changeDelVisible(false));
        dispatch(actionCreators.resetEditInfo());
    },
    handleCancel(e) {
        dispatch(actionCreators.changeDelVisible(false));
        dispatch(actionCreators.resetEditInfo());
    }
});

export default connect(mapState, mapDispatch)(Delete);