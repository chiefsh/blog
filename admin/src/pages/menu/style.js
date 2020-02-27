import styled from 'styled-components';

export const Logo = styled.div`
	width: 100%;
	height: 65px;
	font-size: 20px;
	line-height: 65px;
	text-align: center;
`;

export const MenuWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const MenuItem = styled.div`
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #999;
    margin-top: 20px;
    text-align: center;
    &:hover {
        color: #fff;
    }
    &.active {
        background: #0984e3;
        color: #222;
    }
`;