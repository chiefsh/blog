import styled from 'styled-components';

export const MenuWapper = styled.div`
  background: #fff;
  width: 93%;
  height: 295px;
`;

export const Logo = styled.div`
  background: #222222;
  width: 100%;
  height: 112px;
  line-height: 112px;
  color: #fff;
  text-align: center;
  font-size: 22px;
`;

export const MenuList = styled.div`
  width: 100%;
  height: 183px;
  margin-top: 20px;
`;

export const MenuItem = styled.div`
  position: relative;
  width: 100%;
  height: 37px;
  padding-left: 25px;
  line-height: 37px;
  font-size: 13px;
  box-sizing: border-box;
  cursor: pointer;
  &.active {
    background: #F9F9F9;
  }
  &:hover {
    background: #F9F9F9;
    transition-property: background;
    transition-duration: .2s;
    color: #222;
  }
`;

export const ActiveTag = styled.div`
  position: absolute;
  right: 20px;
  top: 16px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #BBBBBB;
`;

export const AccountInfo = styled.div`
  background: #fff;
  width: 93%;
  height: 418px;
  margin-top: 12px;
`;

export const UserInfo = styled.div`
  height: 100%;
  padding: 20px 10px;
  img {
    display: block;
    padding: 2px;
    width: 126px;
    height: 126px;
    margin: 0 auto;
    border: 1px solid #eee;
  }
  .userName {
    color: #222;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-weight: 600;
    margin: 0;
  }
  .userSignature {
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 13px;
    color: #999;
    margin-bottom: 22px;
  }
`;

export const NavWrapper = styled.div`
  overflow: hidden;
  height: 41px;
  text-align: center;
  margin-bottom: 1px;
`;

export const NavItem = styled.div`
  float: left;
  height: 100%;
  cursor: pointer;
  width: 33%;
  border-left: 1px solid #eee;
  &:first-child {
    border-left: none;
  }
  span {
    &:first-child {
      font-size: 15px;
      font-weight: 600;
    }
    display: block;
    text-align: center;
    color: #555;
    font-size: 13px;
  }
`;

export const Rss = styled.div`
  margin-top: 20px;
  height: 26px;
  border-top: 1px dotted #eee;
  border-bottom: 1px dotted  #eee;
`;

export const OuterLink = styled.div`
  overflow: hidden;
  margin-top: 20px;
  height: 26px;
`;

export const OuterLinkItem = styled.div`
  float: left;
  width: 50%;
  height: 26px;
  line-height: 26px;
  font-size: 14px;
  text-align: center;
  .iconfont {
    width: 30px;
    height: 30px;
    margin-right: 0px;
  }
`;