import React from "react";
import styled from "styled-components";
import '../styles/fonts.css';

const Container = styled.div`    
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
    width: 100%;
`

const ChoiceDescription = styled.div`
    width: 100%;
    margin-top: 20px;
    text-align: center;
    justify-content: space-between;

    p {
        font-family: molot;        
    }
`

const Button = styled.button`
    cursor: pointer;
    border-style: none;    
    width: 250px;    
    height: 30px;
    font-family: molot;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 10% 10% / 10% 10%;

    &:hover {
        background-color: #c6e5d9;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    }
`

const Options = (props) => {
    const handleSetMode = (mode) => {
        props.setMode(mode);        
    }

    return(
        <>
            <ChoiceDescription>
            <span><p>Escolha o modo que deseja</p></span>
            </ChoiceDescription>
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