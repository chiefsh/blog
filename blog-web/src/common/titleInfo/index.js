import React, { Component } from 'react';
import {
    TitleInfoWrapper,
    Container,
    InfoItem
} from './style';

class TitleInfo extends Component {

    render() {
        const {created, grounp, reply_count, view_count} = this.props;
        return(
            <TitleInfoWrapper>
              <Container>
                <InfoItem>
                  <span class="iconfont">&#xe654;</span>发表于{created}
                </InfoItem>
                <InfoItem>
                  <span class="iconfont">&#xe64b;</span>分类于{grounp}
                </InfoItem>
                <InfoItem>
                  <span class="iconfont">&#xe72c;</span>{reply_count ? reply_count : ''}
                </InfoItem>
                <InfoItem>
                  <span class="iconfont">&#xe67f;</span>阅读次数{view_count ? view_count : ''}
                </InfoItem>
              </Container>
            </TitleInfoWrapper>
        );
    }
}

export default TitleInfo;