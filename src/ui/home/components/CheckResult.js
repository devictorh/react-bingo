import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const Grid = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 50px;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd;
    justify-content: center;
`

const Thead = styled.th`
    padding: 12px;
    background-color: greenyellow;
    border-bottom: 1px solid #ddd;
    text-align: center;
    width: 220px;
    font-weight: bold;
    font-size: 72px;
`

const BingoNumber = styled.div`
    font-size: 36px;
    height: 100%;
`

const TCol = styled.td`
    padding: 10px;
    height: 100%;
    position: relative;
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