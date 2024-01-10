import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
`

const Grid = styled.table`
    
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

const TRow = styled.tr`
    padding: 12px;
    text-align: center;    
    font-size: 36px;

`

const TCol = styled.td`
    padding: 10px;
    justify-content: center;
    text-align: center;
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
                <table>
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
                        <TCol>
                            {
                                bingoCard.b.map((number) => (
                                    <TRow>
                                        {Object.keys(number)[0]}
                                    </TRow>
                                ))
                            }
                        </TCol>
                        <TCol>
                            {
                                bingoCard.i.map((number) => (
                                    <TRow>
                                        {Object.keys(number)[0]}
                                    </TRow>
                                ))
                            }
                        </TCol> 
                        <TCol>
                            {
                                bingoCard.n.map((number) => (
                                    <TRow>
                                        {Object.keys(number)[0]}
                                    </TRow>
                                ))
                            }
                        </TCol> 
                        <TCol>
                            {
                                bingoCard.g.map((number) => (
                                    <TRow>
                                        {Object.keys(number)[0]}
                                    </TRow>
                                ))
                            }
                        </TCol> 
                        <TCol>
                            {
                                bingoCard.o.map((number) => (
                                    <TRow>
                                        {Object.keys(number)[0]}
                                    </TRow>
                                ))
                            }
                        </TCol>                     
                    </tbody>
                </table>
            </Grid>
        </Container>
    )
}

export default FrameResults