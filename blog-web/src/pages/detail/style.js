import styled from 'styled-components';

export const DetailWapper = styled.div`
    width: 100%;
    padding: 40px 40px;
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
    overflow: hidden;
    color: #555;
    line-height: 2;
    font-size: 14px;
`;

export const Notes = styled.div`
    margin: 40px 0 40px 0;
    padding: 10px 20px;
    border-left: 3px solid #ff1700;
    background-color: #f9f9f9;
    font-size: 14px;
    line-height: 2;
`;

export const NotesItem = styled.div`
    b {
        font-weight: bold;
    }
`;

export const Footer = styled.div`
    overflow: hidden;
    height: 35px;
    padding: 10px 0 0 0;
    margin-top: 30px;
    border-top: 1px solid #eee;
`;

export const NextUp = styled.div`
    float: left;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #222;
    }
`;

export const NextDown = styled.div`
    float: right;
    height: 100%;
    cursor: pointer;
    &:hover {
        color: #222;
    }
`;
