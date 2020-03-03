import styled from 'styled-components';


export const AddWrapper = styled.div`
    position: absolute;
    display: block;
    width: 400px;
    height: 200px;
    z-index: 2;
    background: #fff;
    box-shadow: 5px 5px 2px 1px rgba(0, 0, 255, .2);
    border: 1px solid #999;
    margin:0 auto;
    left:0;
    right:0;
`;

export const Exit = styled.div`
    float: right;
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #999;
    }
`;

export const InputWrapper = styled.div`
    height: 40px;
    width: 300px;
    margin: 40px auto;
    .groupInput {
        float: right;
        right: 10px;
        height: 40px;
        width: 220px;
    }
`;

export const Label = styled.label`
    float: left;
    height: 40px;
    width: 80px;
    display: inline-block;
    line-height: 40px;
    left: 20px;
    text-align: center;
    font-size: 16px;
    color: #999;
`;

export const Button = styled.div`
    background: #0984e3;
    color: #fff;
    font-size: 16px;
    display: block;
    text-align: center;
    line-height: 40px;
    height: 40px;
    margin: 0 auto;
    width: 100px;
    border-radius: 2px;
    cursor: pointer;
`;