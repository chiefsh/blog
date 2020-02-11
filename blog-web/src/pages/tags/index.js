import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {
    TagsWrapper,
    TitleWrapper,
    Title,
    TagsList,
    TagItem
} from './style';
import {actionCreators} from './store';

class Tags extends Component {

    render() {
        const {tag_list, tag_total} = this.props;
        return (
            <TagsWrapper>
                <TitleWrapper>
                    <Title>目前共计{tag_total}个标签</Title>
                </TitleWrapper>
                <TagsList>
                    {
                        tag_list.map((item) => (
                            <Link key={item.get('id')} to={'/tagsDetail/' + item.get('id')}>
                                <TagItem
                                    className={item.get('count')>=2 ? 'active' : ''}
                                >{item.get('name')}</TagItem>
                            </Link>
                        ))
                    }
                </TagsList>
            </TagsWrapper>
        );
    }

    componentDidMount() {
        this.props.getTags();
    }

}

const mapState = (state) => ({
    tag_list: state.getIn(['tags', 'tag_list']),
    tag_total: state.getIn(['tags', 'tag_total'])
});

const mapDispatch = (dispatch) => ({
    getTags() {
        dispatch(actionCreators.getTags());
    }
});

export default connect(mapState, mapDispatch)(Tags);

