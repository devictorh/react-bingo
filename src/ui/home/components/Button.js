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

    return(
        <Container>
            <Button onClick={() => props.click1()}>
                {props.name1}
            </Button>
            <Button onClick={() => props.click2()}>
                {props.name2}
            </Button>
            {props.name3 == 'Voltar' && <Button onClick={() => props.click3()}>
                {props.name3}
            </Button>}
        </Container>
    )
}

export default Buttons