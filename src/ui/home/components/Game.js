import React, { useState, useEffect } from "react";
import Result from "./Result";
import Buttons from "./Button";

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
    margin-bottom: 5px;
    justify-content: center;
    text-align: center;    
    font-weight: bold;
`

const TCol = styled.td`
    padding: 10px;
`

const Game = () => {
    const [bingoCard, setBingoCard] = useState({
        b: [],
        i: [],
        n: [],
        g: [],
        o: []
    })

    const handleSort = () => {
        setBingoCard(
            checkedNumber()
        );
    }

    const handleNewGame = () => {
        initializeBingoCard();
    }

    const checkedNumber = () => {
        let newNumber;
      
        function generateNewNumber() {
            newNumber = getRandomIntInclusive(1, 75);
            console.log('New Number Generate: ' + newNumber);
        }
      
        function checkNumberNotChecked() {
            for (const letter in bingoCard) {
                    for (let index = 0; index < bingoCard[letter].length; index++) {
                        const key = Object.keys(bingoCard[letter][index])[0];
                
                        if (key == newNumber && bingoCard[letter][index][newNumber]) {
                            generateNewNumber();
                            return checkNumberNotChecked();
                        }
                    }
            }      
            return true;
        }
      
        generateNewNumber();
        checkNumberNotChecked();
      
        function findNumberToCheck(bingo) {
            return bingo.map((numberObj) => {
                const key = Object.keys(numberObj)[0];            
                return {
                    [key]: key == newNumber ? true : numberObj[key]
                };
            });
        }
      
        return {
            b: findNumberToCheck(bingoCard.b),
            i: findNumberToCheck(bingoCard.i),
            n: findNumberToCheck(bingoCard.n),
            g: findNumberToCheck(bingoCard.g),
            o: findNumberToCheck(bingoCard.o)
        };
    };
      

    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const generateNumbers = (min, max) => {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push({ [i]: false });
        }
        return numbers;
    };

    const initializeBingoCard = () => {
        setBingoCard({
            'b': generateNumbers(1, 15),
            'i': generateNumbers(16, 30),
            'n': generateNumbers(31, 45),
            'g': generateNumbers(46, 60),
            'o': generateNumbers(61, 75),
        });
    };

    useEffect(() => {
        initializeBingoCard();
    }, []);

    return(
        <Container>
            <Result />
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
                                        backgroundColor: numberObj[Object.keys(numberObj)[0]] ? '#da1a29' : '#f0e5c9',
                                        color: numberObj[Object.keys(numberObj)[0]] ? 'white' : 'black'
                                    }}
                                > 
                                    {Object.keys(numberObj)[0]}
                                </BingoNumber>
                            ))}
                        </TCol>
                    ))}
                </tbody>
            </Grid>

            <Buttons onSort={handleSort} onNewGame={handleNewGame} />
        </Container>        
    )
}

export default Game