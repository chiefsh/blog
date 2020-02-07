import styled from 'styled-components';

export const TitleInfoWrapper = styled.div`
  height: 24px;
  width: 100%;
  border: none,
  color: #999;
  margin-top: 15px;
  margin-bottom: 30px;
  box-sizing: border-box;
  text-align: center;
`;

export const Container = styled.div`
  over-flow: hidden;
  height: 100%;
  margin: 0 auto;
  display: inline-block;
`;

export const InfoItem = styled.div`
  float: left;
  line-height: 12px;
  font-size: 12px;
  text-align: center;
  border-left: 1px solid #999;
  box-sizing: border-box;
  padding: 0 10px;
  &:first-child {
    border-left: none;
  }
  span {
      width: 16px;
      heith: 16px;
      margin-right: 5px;
  }
  i {
    border-bottom: 1px solid #999;
    cursor: pointer;
    margin-left: 2px;
    &:hover {
      &:hover {
        transition-property: color border-color;
        transition-duration: .2s;
        color: #222;
        border-color: #222;
    }
    }
  }
`;