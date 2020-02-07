import styled from 'styled-components';

export const HomeWapper = styled.div`
    width: 100%;
    padding: 40px 40px;
    box-sizing: border-box;
`;

export const ArticleList = styled.div`
    width: 100%;
    height: 100%;
`;

export const ArticleItem = styled.div`
    width: 100%;
    height: 400px;
    padding: 30px 0;
    box-sizing: border-box;
`;

export const Title = styled.div`
    width: 100%;
    height: 39px;
    line-height: 39px;
    font-size: 26px;
    text-align: center;
    color: #555;
`;

export const Content = styled.div`
    height: 200px;
    overflow: hidden;
    color: #555;
    line-height: 2;
    font-size: 14px;
`;

export const LoadMore = styled.div`
    height: 60px;
    width: 100%;
`;

export const Button = styled.div`
    width: 110px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 2px solid #555;
    border-radius: 2px;
    text-align: center;
    margin: 0 auto;
    color: #555;
    box-sizing: border-box;
    &:hover {
        background: #222;
        transition-property: background;
        transition-duration: .2s;
        color: #fff;
    }
`;