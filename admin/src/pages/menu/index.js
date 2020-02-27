import React, { Component } from "react";
import { Icon } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Logo, MenuWrapper, MenuItem } from "./style";
import { actionCreators } from "./store";

class Menu extends Component {
  render() {
    const { articleSelect, groupSelect, tagSelect, selectItem } = this.props;
    return (
      <MenuWrapper>
        <Logo>
          <Icon
            type="codepen-circle"
            theme="filled"
            style={{ marginRight: "10px" }}
          />
          后台管理
        </Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <MenuItem
            className={articleSelect ? "active" : ""}
            onClick={() => selectItem(1)}
          >
            文章列表
          </MenuItem>
        </Link>
        <Link to="/group" style={{ textDecoration: "none" }}>
          <MenuItem
            className={groupSelect ? "active" : ""}
            onClick={() => selectItem(2)}
          >
            分类管理
          </MenuItem>
        </Link>
        <Link to="/tags" style={{ textDecoration: "none" }}>
          <MenuItem
            className={tagSelect ? "active" : ""}
            onClick={() => selectItem(3)}
          >
            标签管理
          </MenuItem>
        </Link>
      </MenuWrapper>
    );
  }
}

const mapState = state => ({
  articleSelect: state.getIn(["menu", "articleSelect"]),
  groupSelect: state.getIn(["menu", "groupSelect"]),
  tagSelect: state.getIn(["menu", "tagSelect"])
});

const mapDispatch = dispatch => ({
  selectItem(num) {
    dispatch(actionCreators.selectItem(num));
  }
});

export default connect(mapState, mapDispatch)(Menu);
