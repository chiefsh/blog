import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    DetailWapper,
    Title,
    Content,
    Notes,
    NotesItem,
    Footer,
    NextUp,
    NextDown
} from './style';
import TitleInfo from "../../common/titleInfo";
import {actionCreators} from './store';

class Detail extends Component {
    render() {
        const {article, previous, next, getDetail} = this.props;
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
            <Content dangerouslySetInnerHTML={{__html: article.get('content')}}></Content>
            <Notes>
                <NotesItem>
                    <b>本文作者：</b>{article.get('author')}
                </NotesItem>
                <NotesItem>
                    <b>版权声明：</b>转载请注明出处！
                </NotesItem>
            </Notes>
            <Footer>
            <NextUp
              onClick={() => getDetail(previous.get('id'))}
            >{"< " + previous.get('title')}</NextUp>
            <NextDown
              onClick={() => getDetail(next.get('id'))}
            >{next.get('title') + " >"}</NextDown>
            </Footer>
        </DetailWapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    article: state.getIn(['detail', 'article']),
    previous: state.getIn(['detail', 'previous']),
    next: state.getIn(['detail', 'next'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));