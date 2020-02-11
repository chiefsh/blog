import styled from 'styled-components';

export const TagsWrapper = styled.div`
    height: 700px;
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
`;


export const TitleWrapper = styled.div`
    height: 28px;
    width: 100%;
    padding: 40px 0 0 0;
    text-align: center;
`;

export const Title = styled.div`
    display: inline-block;
    height: 28px;
    line-height: 28px;
    // color: #fff;
    font-size: 16px;
    font-weight: blod;
    margin: 0 auto;
`;

export const TagsList = styled.div`
    width: 100%;
    margin-top: 40px;
    overflow: hidden;
`;

export const TagItem = styled.div`
    float: left;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    border-bottom: 1px solid #999;
    cursor: pointer;
    color: #555;
    &.active {
        font-size: 28.5px;
        color: #222;
        border-bottom: 1px solid #212121;
    }
    &:hover {
        border-bottom: 1px solid #222;
    }
`;