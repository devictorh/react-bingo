import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;    
    font-size: 42px;
    font-family: Molot;
    margin-top: 30px;
    width: 100%;
    height: 60px;
    background-color: #f0f0f0;
    box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.3);
`

const Result = () => {
    return (
        <Container>
            <p>Bingo !!!</p>
        </Container>
    )
}

export default Result