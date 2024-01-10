import React from 'react';
import styled from "styled-components";

const Container = styled.footer`
    width: 100%;
    font-size: 32px;
    text-align: center;
    bottom: 0;
    position: fixed;
    background-color: #f0f0f0; 
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.9);
`

const Footer = () => {
    return (
        <Container>&copywrite VhT1 2024</Container>
    )
}

export default Footer