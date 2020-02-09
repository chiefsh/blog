import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: 100%;
    height: 31px;
    border-top: 1px solid #ccc;
    background: #fff;
    margin-bottom: 40px;
    margin-top: 40px;
    text-align: center;
`;

export const PageNumWrapper = styled.div`
    height: 100%;
    display: inline-block;
`;

export const PageNum = styled.div`
    float: left;
    height: 31px;
    width: 28.55px;
    line-height: 31px;
    text-align: center;
    font-size: 14px;
    margin: 0 10px;
    &:hover {
        border-top: 1px solid #222;
        margin-top: -1px;
    }
    &.current {
        background: #ccc;
    }
    &:last-child {
        margin-left: 30px;
    }
`;