import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  HomeWapper,
  ArticleList,
  ArticleItem,
  Title,
  Content,
  LoadMore
} from "./style";
import TitleInfo from "../../common/titleInfo";
import {actionCreators} from './store';

class Home extends Component {
  render() {
    console.log('************render***********');
    console.log(this.props);
    const { total, currentPage, articleList} = this.props;
    return (
      <HomeWapper>
        <ArticleList>
          {
              articleList.map((item) => (
                <ArticleItem>
                    <Title>{item.get('title')}</Title>
                    <TitleInfo created={item.get('created')} grounp={item.get('grounp')} reply_count={item.get('reply_count')} view_count={item.get('view_count')}></TitleInfo>
                    <Content dangerouslySetInnerHTML={{__html: item.get('summary')}} ></Content>
                    <LoadMore>阅读全文</LoadMore>
              </ArticleItem>
              ))
          }
        </ArticleList>
      </HomeWapper>
    );
  }

  componentDidMount() {
      console.log('componentDidMount');
      this.props.getActicleList(this.props.currentPage);
  }

}

const mapState = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    total: state.getIn(['home', 'total']),
    currentPage: state.getIn(['home', 'currentPage']),
});

const mapDispatch = (dispatch) => ({
    getActicleList(currentPage) {
        dispatch(actionCreators.getActicleList(currentPage));
    }
});

export default connect(mapState, mapDispatch)(Home);
