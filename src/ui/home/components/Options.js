import React from "react";
import styled from "styled-components";
import '../styles/fonts.css';

const Container = styled.div`    
    display: flex;
    align-items: center;
    padding: 10px;    
    justify-content: space-between;
    width: 100%;
`

const Button = styled.button`
    cursor: pointer;
    border-style: none;    
    width: 250px;    
    height: 30px;
    font-family: molot;    
    font-size: 18px;
    border-radius: 10% 10% / 10% 10%;
    border-bottom: 1px solid #ddd;
    
    &:hover {
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
`

const Options = (props) => {
    const handleSetMode = (mode) => {
        props.setMode(mode);
    }

    return(
        <>
            <Container>
                <Button onClick={() => handleSetMode('sorter')}>
                    Sorteador
                </Button>
                <Button onClick={() => handleSetMode('card')}>
                    Cartela
                </Button>
            </Container>
        </>
        
    )
}

export default Options