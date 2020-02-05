import React, { Component } from 'react';
import {
  HomeWapper,
  ArticleList,
  ArticleItem,
  Title,
  TitleInfo,
  Content,
  LoadMore
} from './style';


class Home extends Component {
    render() {
        <HomeWapper>
            <ArticleList>
                <ArticleItem>
                    <Title></Title>
                    <TitleInfo></TitleInfo>
                    <Content></Content>
                    <LoadMore></LoadMore>
                </ArticleItem>
            </ArticleList>
        </HomeWapper>
    }
}