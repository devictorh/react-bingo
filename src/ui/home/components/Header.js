import React from "react";
import styled from "styled-components";

const Container = styled.header`
    text-align: center;    
    font-size: 42px;
    font-family: Blockt;
    width: 100%;
    height: 100%;
`

const Header = () => {
    return (
        <Container>
            <p>VHT1</p>
        </Container>
    )
}

export default Header