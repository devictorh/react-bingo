import React from "react";

import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0%, 50%, 100% {
        opacity: 1;
    }
    25%, 75% {
        opacity: 0;
    }
`;

const Value = styled.p`
    color: #da1a29;
    animation: ${blink} 4s infinite;
    font-size: 36px;
    font-family: Blockt;
`

const Container = styled.div`
    text-align: center;
    margin-top: 30px;
    width: 100%;
    height: 60px;    
    background-color: #f0e5c9;    
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
`

const Result = (props) => {
    return (
        <Container>
            <Value>{props.result}</Value>
        </Container>
    )
}

export default Result