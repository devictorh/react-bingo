import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    height: 90%;
`

const Grid = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Arial', sans-serif;
    border: 1px solid #ddd;
`

const Thead = styled.th`
    padding: 5px;
    font-family: Blockt;    
    border-bottom: 1px solid #ddd;
    text-align: center;    
    font-size: 46px;    
    background-color: rgb(
        ${() => Math.floor(Math.random() * 256)},
        ${() => Math.floor(Math.random() * 256)},
        ${() => Math.floor(Math.random() * 256)}
    );
`

const BingoNumber = styled.div`
    font-size: 42px;
    min-height: 80px;
    min-width: 80px;
    text-align: center;    
    border-radius: 5px;
    margin-bottom: 5px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    }
`

const TCol = styled.td`
    padding: 10px;
`

const Card = () => {
    
    const [bingoCard, setBingoCard] = useState({
        b: [],
        i: [],
        n: [],
        g: [],
        o: []
    })

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateNumbers(min, max) {
        const numbers = [];
        for (let i = 1; i <= 5; i++) {
            numbers.push(
                { 
                    [getRandomIntInclusive(min, max)]: false
                }
            );
        }
        return numbers;
    };

    function initializeBingoCard() {
        setBingoCard({
            'b': generateNumbers(1, 15),
            'i': generateNumbers(16, 30),
            'n': generateNumbers(31, 45),
            'g': generateNumbers(46, 60),
            'o': generateNumbers(61, 75),
        });

    };

    function setResult(index){
        console.log('index: '+ index)
    }

    useEffect(() => {
        initializeBingoCard();
    }, []);

    return (
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
                                <BingoNumber 
                                    key={index}
                                    style={{
                                        backgroundColor: numberObj[Object.keys(numberObj)[0]] ? '#da1a29' : '#c6e5d9',
                                        color: numberObj[Object.keys(numberObj)[0]] ? 'white' : 'black'
                                    }}
                                    onClick={setResult(index)}
                                > 
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

export default Card;