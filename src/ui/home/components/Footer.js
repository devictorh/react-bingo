import React from 'react';
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    font-size: 18px;
    text-align: center;
    bottom: 0;
    position: fixed;    
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.9);
`

const Footer = () => {
    return (
        <Container>&#169; VhT1 2024</Container>
    )
}

export default Footer