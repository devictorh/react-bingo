import React from "react";
import styled from "styled-components";

const Container = styled.header`
    text-align: center;    
    font-size: 42px;
    font-family: Blockt;
    width: 100%;
    height: 100%;
    color: #654a8f;
    background-color: #d9cde3;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.9);
`

const Header = () => {
    return (
        <Container>
            <p>VHT1</p>
        </Container>
    )
}

export default Header