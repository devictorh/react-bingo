import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;    
    font-size: 36px;
    font-family: Blockt;
    margin-top: 30px;
    width: 100%;
    height: 60px;
    color: #654a8f;
    background-color: #f0e5c9;

    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
`

const Result = (props) => {
    return (
        <Container>
            <p>{props.result}</p>
        </Container>
    )
}

export default Result