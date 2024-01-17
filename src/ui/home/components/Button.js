import React from "react";
import styled from "styled-components";
import '../styles/fonts.css';

const Container = styled.div`
    position: relative;
    display: flex;    
    align-items: center;
    justify-content: space-between;
`

const Button = styled.button`
    cursor: pointer;
    border-style: none;
    width: 100%;
    max-width: 250px;
    height: 40px;
    margin-top: 10px;
    border-radius: 10% 10% / 10% 10%;
    font-family: molot;
    font-size: 18px;

    &:hover {
       background-color: #c6e5d9 ;
       box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
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