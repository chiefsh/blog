import styled from 'styled-components';

export const SearchWrapper = styled.div`
   width: 100%;
   padding: 40px;
   box-sizing: border-box;
`;

export const SearchWarnning = styled.div`
   height: 500px;
   width: 100%px;
`;

export const SearchInputWrapper = styled.div`
   position: relative;
   width: 300px;
   height: 50px;
   margin: 30px auto;
   .iconfont {
      display: inline-block;
      position: absolute;
      right: 0px;
      top: 5px;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 20px;
      font-size: 35px;
      cursor: pointer;
   }
`;

export const SearchInput = styled.input.attrs({
   placeholder: '输入关键字搜索'
 })`
   width: 300px;
   display: inline-block;
   height: 50px;
   line-height: 50px;
   font-size: 20px;
   border: 1px solid #eee;
   outline: none;
   border-radius: 25px;
   box-sizing: border-box;
   padding: 0 20px;
   background: #eee;
   &::placeholder {
      color: #999;
   }
`;