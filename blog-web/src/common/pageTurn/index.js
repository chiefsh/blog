import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    PageWrapper,
    PageNumWrapper,
    PageNum
} from './style';
import {actionCreators} from './store';

class PageTurn extends Component {

    render() {
        const {total, size, currentPage, selectPage} = this.props;
        const total_page = Math.ceil(total/size);
        let list = [];
        if (total_page > 0 && total_page <= 3) {
            for (var i = 1; i <= total_page; i++){
                list.push(i)
            }
            list.push(">");
        }else if (total_page > 3) {
            list = ["1", "2", "...", total_page, ">"];
        }else {
            list = ["0", ">"];
        }
        return(
            <PageWrapper>
              <PageNumWrapper>
                    {
                    list.map((item, index) => (
                        <PageNum 
                          key={index} 
                          className={item==currentPage.toString() ? "current" : null}
                          onClick={() => selectPage(item)}
                        >{item}</PageNum>
                        ))
                    }
              </PageNumWrapper>
            </PageWrapper>
        );
    }

}

const mapState = (state) => ({
    size: state.getIn(['home', 'size']),
    total: state.getIn(['home', 'total']),
    currentPage: state.getIn(['home', 'currentPage']),
});

const mapDispatch = (dispatch) => ({
    selectPage(page) {
        dispatch(actionCreators.selectPage(page));
    }
});

export default connect(mapState, mapDispatch)(PageTurn);