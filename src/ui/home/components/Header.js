import React from "react";
import styled from "styled-components";
import '../styles/fonts.css';

const Container = styled.header`
    text-align: center;    
    font-size: 42px;
    font-family: Blockt;
    width: 100%;
    height: 100%;

    p {
        color: rgb(
            ${() => Math.floor(Math.random() * 256)},
            ${() => Math.floor(Math.random() * 256)},
            ${() => Math.floor(Math.random() * 256)}
        );
    }
`

const Header = () => {
    return (
        <Container>
            <p>VHT1</p>
        </Container>
    )
}

export default Header