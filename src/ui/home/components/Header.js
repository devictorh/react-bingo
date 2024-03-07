import React from "react";
import styled from "styled-components";
import '../styles/fonts.css';

const Container = styled.header`
    text-align: center;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;

    p {
        font-size: 42px;
        font-family: Blockt;
    }

    h1 {
        font-family: Impact;
    }
`

const Header = () => {
    return (
        <Container>            
            <p>VHT1</p>
            <h1>Bingo Online</h1>
        </Container>
    )
}

export default Header