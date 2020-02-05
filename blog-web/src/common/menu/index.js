import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    MenuWapper,
    Logo,
    MenuList,
    MenuItem,
    ActiveTag,
    AccountInfo,
    UserInfo,
    NavWrapper,
    NavItem,
    Rss,
    OuterLink,
    OuterLinkItem
} from './style';
import {actionCreators} from './store';


class Menu extends Component {

    render() {
        const { homeSelected, groupSelected, tagSelected, headImgUrl, userName, userSignature, articleCount, groupCount, tagCount, handleMenuSelected } = this.props;
        return (
            <div>
                <MenuWapper>
                    <Logo>{userName}`s Notes</Logo>
                    <MenuList>
                        <MenuItem onClick={() => handleMenuSelected('home')} className={homeSelected ? 'active' : null}>
                        <span className="iconfont">&#xe64e;</span>首页
                        { homeSelected ? <ActiveTag /> : null }
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuSelected('group')} className={groupSelected ? 'active' : null}>
                        <span className="iconfont">&#xe623;</span>分类
                        { groupSelected ? <ActiveTag /> : null }
                        </MenuItem>
                        <MenuItem onClick={() => handleMenuSelected('tag')} className={tagSelected ? 'active' : null}>
                        <span className="iconfont">&#xe600;</span>标签
                        { tagSelected ? <ActiveTag /> : null }
                        </MenuItem>
                        <MenuItem>
                        <span className="iconfont">&#xe609;</span>搜索
                        </MenuItem>
                    </MenuList>
                </MenuWapper>
                <AccountInfo>
                    <UserInfo>
                        <img src={headImgUrl}/>
                        <div className="userName">{userName}</div>
                        <div className="userSignature">{userSignature}</div>
                        <NavWrapper>
                          <NavItem>
                              <span>{articleCount}</span>
                              <span>日志</span>
                          </NavItem>
                          <NavItem>
                              <span>{groupCount}</span>
                              <span>分类</span>
                          </NavItem>
                          <NavItem>
                              <span>{tagCount}</span>
                              <span>标签</span>
                          </NavItem>
                        </NavWrapper>
                        <Rss></Rss>
                        <OuterLink>
                            <OuterLinkItem href='https://github.com/chiefsh' target="view_window">
                            <span className="iconfont">&#xe677;</span>GitHub
                            </OuterLinkItem>
                            <OuterLinkItem href='https://blog.csdn.net/chief_victo' target="view_window">
                            <span className="iconfont">&#xe60a;</span>CSDN
                            </OuterLinkItem>
                        </OuterLink>
                    </UserInfo>
                </AccountInfo>
            </div>
        )
    }
}

const mapState = (state) => ({
    homeSelected: state.getIn(['menu', 'homeSelected']),
    groupSelected: state.getIn(['menu', 'groupSelected']),
    tagSelected: state.getIn(['menu', 'tagSelected']),
    headImgUrl: state.getIn(['menu', 'headImgUrl']),
    userName: state.getIn(['menu', 'userName']),
    userSignature: state.getIn(['menu', 'userSignature']),
    articleCount: state.getIn(['menu', 'articleCount']),
    groupCount: state.getIn(['menu', 'groupCount']),
    tagCount: state.getIn(['menu', 'tagCount']),
});

const mapDispatch = (dispatch) => ({
    handleMenuSelected(item) {
        dispatch(actionCreators.menu_select(item));
    }
});

export default connect(mapState, mapDispatch)(Menu);