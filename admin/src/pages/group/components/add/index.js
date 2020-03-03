import React, {Component} from 'react';
import { Input } from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {
    AddWrapper,
    InputWrapper,
    Label,
    Button,
    Exit
} from './style';
import { actionCreators } from '../../store';

class Add extends Component {
    render() {
        const {groupName, id, addGroup, changeDisplay, changeInputValue} = this.props;
        return(
          <AddWrapper>
              <Exit>
                <CloseOutlined
                  onClick={()=> changeDisplay(false)}
                />
              </Exit>
              <InputWrapper>
                <Label>类  名：</Label>
                <Input 
                  ref={(input) => this.input = input} 
                  className='groupInput' 
                  value={groupName} 
                  placeholder="请输入类名" 
                  onChange={changeInputValue}
                />
              </InputWrapper>
              <Button
                onClick={() => addGroup(this.input.state.value, id)}
              >确  定</Button>
          </AddWrapper>
        );
    }
}

const mapState = (state) => ({
    groupName: state.getIn(['group', 'groupName']),
    id: state.getIn(['group', 'id'])
});

const mapDispatch = (dispatch) => ({
    addGroup(value, id) {
        if (value.length!==0) {
            dispatch(actionCreators.addGroup(value, id));
            dispatch(actionCreators.resetEditInfo());
        }
    },
    changeDisplay(value) {
        dispatch(actionCreators.changeDisplayNew(value));
        dispatch(actionCreators.resetEditInfo());
    },
    changeInputValue(e) {
        dispatch(actionCreators.changeInputValue(e.target.value));
    }
});

export default connect(mapState, mapDispatch)(Add);