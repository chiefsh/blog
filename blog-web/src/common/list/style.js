import styled from 'styled-components';

export const ListWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
`;

export const UlWrapper= styled.ul`
    width: 100%;
    color: #555;
    list-style: circle;
    box-sizing: border-box;
    padding-right: 20px;
`;

export const LiWrapper= styled.li`
    display: inline-block;
    list-style: desc;
    width: 100%;
    height: 30px;
    border-bottom: 1px dashed #999;
    margin: 10px;
    cursor: pointer;
    &:hover {
        border-bottom: 1px dashed #212121;
    }
    color: #555;
`;

export const ItemLeft = styled.div`
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    float: left;
`;

export const ItemRight = styled.div`
    font-size: 16px;
    height: 30px;
    line-height: 30px;
    float: left;
    margin-left: 10px;
    font-size: 12px;
`;

export const PageSeek= styled.div`
    width: 100%;
    height: 31px;
    border-top: 1px solid #ccc;
    background: #fff;
    margin-left: 10px;
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
`;

export const PageNext = styled.div`
    float: left;
    height: 31px;
    width: 28.55px;
    line-height: 31px;
    text-align: center;
    font-size: 14px;
    margin: 0 10px 0 30px;
    &:hover {
        border-top: 1px solid #222;
        margin-top: -1px;
    }
`;