import React, { Component } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  HomeWapper,
  ArticleList,
  ArticleItem,
  Title,
  Content,
  LoadMore,
  Button
} from "./style";
import TitleInfo from "../../common/titleInfo";
import  PageTurn from "../../common/pageTurn";
import {actionCreators} from './store';

class Home extends Component {
  render() {
    const { total, currentPage, articleList} = this.props;
    return (
      <HomeWapper>
        <ArticleList>
          {
              articleList.map((item) => (
                <ArticleItem key={item.get('id')}>
                    <Link to={'/detail/'+item.get('id')} style={{ textDecoration: 'none' }}>
                    <Title>{item.get('title')}</Title>
                    </Link>
                    <TitleInfo created={item.get('created')} group_id={item.get('grounp').get('id')} name={item.get('grounp').get('name')} reply_count={item.get('reply_count')} view_count={item.get('view_count')}></TitleInfo>
                    <Content dangerouslySetInnerHTML={{__html: item.get('summary')}} ></Content>
                    <LoadMore>
                      <Link to={'/detail/'+item.get('id')} style={{ textDecoration: 'none' }}>
                      <Button>阅读全文 ></Button>
                      </Link>
                    </LoadMore>
              </ArticleItem>
              ))
          }
        </ArticleList>
        <PageTurn></PageTurn>
      </HomeWapper>
    );
  }

  componentDidMount() {
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
