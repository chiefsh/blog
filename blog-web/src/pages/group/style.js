import styled from 'styled-components';

export const GroupWrapper = styled.div`
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

export const GroupList = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-left: 20px;
`;

export const UlList = styled.ul`

`;

export const GroupItem = styled.li`
    height: 40px;
    color: #b2bec3;
    i {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        margin-right: 5px;
        color: #555;
        border-bottom: 1px solid #555;
        cursor: pointer;
        &:hover {
            color: #222;
            border-bottom: 1px solid #222;
        }
    }
`;

