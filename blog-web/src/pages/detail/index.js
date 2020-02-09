import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    DetailWapper,
    Title,
    Content,
    Notes,
    Footer,
    NextUp,
    NextDown
} from './style';
import TitleInfo from "../../common/titleInfo";

class Detail extends Component {
    render() {
        const {article, previous, next} = this.props;
        return (
        <DetailWapper>
            <Title>{article.get('title')}</Title>
            <TitleInfo 
              created={article.get('created')} 
              group_id={article.get('grounp').get('id')} 
              name={article.get('grounp').get('name')} 
              reply_count={article.get('reply_count')} 
              view_count={article.get('view_count')}
            ></TitleInfo>
            <Content>{article.get('content')}</Content>
            <Notes>
                <div>
                    <b>本文作者：</b>{article.get('author')}
                </div>
                <div>
                    <b>版权声明：</b>转载请注明出处！
                </div>
            </Notes>
            <Footer>
            <NextUp>< {previous.get('title')}</NextUp>
            <NextDown>{next.get('title')} ></NextDown>
            </Footer>
        </DetailWapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

mapState = (state) => ({
    article: state.getIn(['detail', 'article']),
    previous: state.getIn(['detail', 'previous']),
    next: state.getIn(['detail', 'next']),
});

mapDispatch = (dispatch) => ({
    
});

export default connect()(Detail);