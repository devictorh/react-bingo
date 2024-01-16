import React from "react";
import styled from "styled-components";

const Container = styled.header`
    text-align: center;    
    font-size: 42px;
    font-family: Blockt;
    width: 100%;
    height: 100%;
    color: #fffec6;
    background-color: #cc5d4c;
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