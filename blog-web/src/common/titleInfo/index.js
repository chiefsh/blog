import React, { Component } from 'react';
import {
    TitleInfoWrapper,
    Container,
    InfoItem
} from './style';

class TitleInfo extends Component {

    render() {
        const {created, group_id, name, reply_count, view_count} = this.props;
        return(
            <TitleInfoWrapper>
              <Container>
                <InfoItem>
                  <span className="iconfont">&#xe654;</span>发表于{created}
                </InfoItem>
                <InfoItem>
                  <span className="iconfont">&#xe64b;</span>分类于<i>{name}</i>
                </InfoItem>
                <InfoItem>
                  <span className="iconfont">&#xe72c;</span>{reply_count ? reply_count : ''}
                </InfoItem>
                <InfoItem>
                  <span className="iconfont">&#xe67f;</span>阅读次数{view_count ? view_count : ''}
                </InfoItem>
              </Container>
            </TitleInfoWrapper>
        );
    }
}

export default TitleInfo;