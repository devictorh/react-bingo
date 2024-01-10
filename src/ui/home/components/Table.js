import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    height: 90%; /* Alterado para 100% para ocupar a altura total do Container pai */
`

const Grid = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd;
`

const Thead = styled.th`
    padding: 12px;
    font-family: Blockt;    
    border-bottom: 1px solid #ddd;
    text-align: center;    
    font-size: 32px;
    background-color: rgb(
        ${() => Math.floor(Math.random() * 256)},
        ${() => Math.floor(Math.random() * 256)},
        ${() => Math.floor(Math.random() * 256)}
    );
`

const BingoNumber = styled.div`
    font-size: 14px;
    height: 30px;
    box-sizing: border-box;
    padding: 6px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-bottom: 5px;
    justify-content: center;
    text-align: center;
`

const TCol = styled.td`
    padding: 10px;
`

const FrameResults = () => {
    const [results, setResults] = useState([])

    const bingoCard = {
        'b': [],
        'i': [],
        'n': [],
        'g': [],
        'o': []
    }

    const generateNumbers = (min, max) => {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push({ [i]: { checked: false } });
        }
        return numbers;
    };

    bingoCard.b = generateNumbers(1, 15);
    bingoCard.i = generateNumbers(16, 30);
    bingoCard.n = generateNumbers(31, 45);
    bingoCard.g = generateNumbers(46, 60);
    bingoCard.o = generateNumbers(61, 75);

    return(
        <Container>
            <Grid>                
                <thead>
                    <tr>
                        <Thead>B</Thead>
                        <Thead>I</Thead>
                        <Thead>N</Thead>
                        <Thead>G</Thead>
                        <Thead>O</Thead>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(bingoCard).map((letter) => (
                        <TCol key={letter}>
                            {bingoCard[letter].map((numberObj, index) => (
                                <BingoNumber key={index}>
                                    {Object.keys(numberObj)[0]}
                                </BingoNumber>
                            ))}
                        </TCol>
                    ))}
                </tbody>                
            </Grid>            
        </Container>
    )
}

export default FrameResults