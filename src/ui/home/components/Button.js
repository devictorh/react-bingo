import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    cursor: pointer;
    border-style: none;
    width: 100%;
    max-width: 300px;
    height: 40px;
    margin-top: 10px;
    border-radius: 50% 20% / 10% 40%;
    font-family: Blockt;
    font-size: 18px;

    &:hover {
        color: #fffec6;
        background-color: #69a2a8;        
    }
`

const Buttons = (props) => {

    const handleSort = () => {
        props.onSort();    
    }

    const handleNewgame = () => {
        props.onNewGame();
    }

    return(
        <Container>
            <Button onClick={handleSort}>
                SORTEAR
            </Button>
            <Button onClick={handleNewgame}>
                NOVO JOGO
            </Button>
        </Container>
    )
}

export default Buttons