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
    width: 150px;
    height: 40px;
    margin-top: 10px;
    border-radius: 10% 10% / 10% 10%;
    font-family: molot;
    font-size: 18px;
    

    &:hover {
       box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    }
`

const Buttons = (props) => {
    return(
        <Container>
            {props.name1 !== undefined && <Button onClick={() => props.click1()}>
                {props.name1}
            </Button>}
            {props.name2 !== undefined && <Button onClick={() => props.click2()}>
                {props.name2}
            </Button>}
        </Container>
    )
}

export default Buttons