import React from "react";
import styled from "styled-components";

const Container = styled.header`    
    text-align: center;
    justify-content: center;
    font-size: 82px;
    font-family: Molot;
    width: 100%;
    height: 120px;
    background-color: #f0f0f0;
    box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.3);
    top: 0px;    
`

const Header = () => {
    return (        
        <Container>
            <p>VhT1 Bingo</p>
        </Container>
    )
}

export default Header