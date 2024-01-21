import React from "react";

import styled from 'styled-components';
import '../styles/fonts.css';

const Value = styled.p`
    font-size: 36px;
    font-family: Blockt;
`

const Container = styled.div`
    text-align: center;
    margin: 10px 5px;
    width: 100%;
    height: 60px;    
    
`

const Result = (props) => {
    return (
        <Container>
            <Value>{props.result}</Value>
        </Container>
    )
}

export default Result