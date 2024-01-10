import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 10px;
    border: 1px;
    border-radius: 1px solid #fff;
    justify-content: center;
    width: 100%;
    display: grid;    
`

const Button = styled.button`
    cursor: pointer;
    border-style: none;    
    height: 30px;
    width: 1000px;    

    &:hover {
        background-color: lightcoral;
    }
`

const Buttons = () => {
    return(
        <Container>
            <Button>
                SORTEAR
            </Button>
            <Button>
                NOVO JOGO
            </Button>
        </Container>
    )
}

export default Buttons