import React, {Component} from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    Select,
    Tag, 
    Input, 
    Tooltip
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
    ArticleWrapper,
    SelectWrapper,
    Label,
    TagWrapper,
    SubmmitWrapper,
    Submmit
} from './style';
import { actionCreators } from './store';

// 在quiil中注册quill-image-drop-module
Quill.register('modules/imageDrop', ImageDrop);
const { Option } = Select;

class Article extends Component {
    render() {
        const {
            onFocus, onBlur, tags, inputVisible, inputValue, groups,
            handleClose, showInput, handleInputChange, handleInputConfirm,
            selectGroup, onSelect, submitArticle
        } = this.props;
        return(
            <ArticleWrapper>
                <Input 
                  className='title'
                  placeholder='请输入标题'
                  ref={(title)=> this.title = title}
                />
                <ReactQuill 
                  theme='snow'
                  style={{height: "350px", marginBottom: "40px"}}
                  ref={(content) => this.content = content}
                //   onChange={getEditContent}
                />
                <SelectWrapper>
                    <Label>文章类型:</Label>
                    <Select
                        showSearch
                        style={{ width: 200}}
                        placeholder="请选择分类"
                        optionFilterProp="children"
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        className='select'
                    >
                        {
                            groups.map((item) => (
                                <Option key={item.get('id')} value={item.get('id')}>{item.get('name')}</Option>
                            ))
                        }
                    </Select>
                </SelectWrapper>
                <TagWrapper>
                  <Label>文章标签:</Label>
                  {
                    tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable={true} onClose={() => handleClose(tags, tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag} key={tag}>
                            {tagElem}
                            </Tooltip>
                        ) : (
                            tagElem
                        );
                    })
                  }
                {
                inputVisible && (
                <Input
                    ref={(input) => this.saveInputRef = input}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={() => handleInputConfirm(inputValue, tags, inputVisible)}
                    onPressEnter={() => handleInputConfirm(inputValue, tags, inputVisible)}
                />
                )}
                {!inputVisible && (
                <Tag className="site-tag-plus" onClick={() => showInput()}>
                    <PlusOutlined /> New
                </Tag>
                )}
                </TagWrapper>
                <SubmmitWrapper>
                    <Link to='/' style={{ textDecoration: "none" }}>
                    <Submmit
                      onClick={() => submitArticle(this.title.state.value, this.content.state.value, selectGroup, tags)}
                    >发布文章</Submmit>
                    </Link>
                </SubmmitWrapper>
            </ArticleWrapper>
        );
    }

    componentDidMount() {
        this.props.getGroupInfo();
    }
}

const mapState = (state) => ({
    tags: state.getIn(['article', 'tags']),
    inputVisible: state.getIn(['article', 'inputVisible']),
    inputValue: state.getIn(['article', 'inputValue']),
    groups: state.getIn(['article', 'groups']),
    selectGroup: state.getIn(['article', 'selectGroup'])
});

const mapDispatch = (dispatch) => ({
    getGroupInfo() {
        dispatch(actionCreators.getGroupInfo());
    },
    onSelect(key) {
        dispatch(actionCreators.selectGroup(key));
    },
    onBlur() {
        console.log('blur');
    },
    onFocus() {
        console.log('focus');
    },
    handleClose(tags, removedTag) {
        const new_tags = tags.filter(tag => tag !== removedTag);
        dispatch(actionCreators.changeTags(new_tags));
    },
    showInput() {
        dispatch(actionCreators.changeShowInput(true));
    },
    handleInputChange(e) {
        dispatch(actionCreators.changeInputValue(e.target.value));
    },
    handleInputConfirm (inputValue, tags, inputVisible) {
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        dispatch(actionCreators.changeTagsAll(tags, inputVisible, ''));
    },
    getEditContent(content, delta, source, editor) {
        dispatch(actionCreators.getEditContent(editor.getContents()));
    },
    submitArticle(title, content, group, tags) {
        console.log("*************")
        console.log(title);
        console.log(content);
        console.log(group);
        console.log(tags);
        dispatch(actionCreators.submitArticle(title, content, group, tags));
    }



});

export default connect(mapState, mapDispatch)(Article);