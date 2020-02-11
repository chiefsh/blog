import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    SearchWrapper,
    SearchInput,
    SearchWarnning,
    SearchInputWrapper
} from './style';
import List from '../../common/list';
import {actionCreators} from './store';

class Search extends Component {
    render() {
        const {searchTotal, searchList, searchName, currentPage, getSearch} = this.props;
        if (searchList.size === 0) {
            return (
                <SearchWrapper>
                    <SearchInputWrapper>
                        <SearchInput 
                            ref={(input) => {this.input = input}}
                        ></SearchInput>
                        <span onClick={() => getSearch(this.input.value, currentPage)} className="iconfont">&#xe609;</span>
                    </SearchInputWrapper>
                    <SearchWarnning></SearchWarnning>
                </SearchWrapper>
            );
        }else {
            return(
                <SearchWrapper>
                  <SearchInputWrapper>
                        <SearchInput 
                            ref={(input) => {this.input = input}}
                        ></SearchInput>
                        <span onClick={() => getSearch(this.input.value, currentPage)} className="iconfont">&#xe609;</span>
                  </SearchInputWrapper>
                  <List
                    article_list={searchList}
                    page_total={searchTotal}
                    currentPage={currentPage}
                    selectPage={getSearch}
                    page_size={10}
                    id={this.input.value}
                  ></List>
                </SearchWrapper>
            );
        }
    }

}

const mapState = (state) => ({
    searchTotal: state.getIn(['search', 'searchTotal']),
    currentPage: state.getIn(['search', 'currentPage']),
    searchList: state.getIn(['search', 'searchList'])
});

const mapDispatch = (dispatch) => ({
    getSearch(keyword, page) {
        dispatch(actionCreators.getSearch(keyword, page));
    }
});

export default connect(mapState, mapDispatch)(Search);