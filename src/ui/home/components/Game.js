import React, { useState, useEffect } from "react";
import Result from "./Result";
import Buttons from "./Button";

import styled from "styled-components";
import '../styles/fonts.css';


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
    const [currentResult, setCurrentResult] = useState('BOA SORTE');
    const [totalResults, setTotalResults] = useState([]);    

    const [bingoCard, setBingoCard] = useState({
        b: [],
        i: [],
        n: [],
        g: [],
        o: []
    })

    function handleSort() {
        if (!checkEndGame()){
            setBingoCard(
                checkedNumber()
            );
        }
    }

    function handleNewGame() {
        initializeBingoCard();
    }

    function checkEndGame() {
        var isEndGame = false;
        if (totalResults.length == 75){
            isEndGame = true;
        }

        return isEndGame
    }

    const checkedNumber = () => {
        var newNumber;
      
        function generateNewNumber() {
            newNumber = getRandomIntInclusive(1, 75);
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

        function getLetterByNumber(number) {
            var numberResult = '';

            if (number >= 1 && number <= 15){
                numberResult = 'B:' + number;
            }else if (number >= 16 && number <= 30){
                numberResult = 'I:' + number;
            }else if (number >= 31 && number <= 45){
                numberResult = 'N:' + number;
            }else if (number >= 46 && number <= 60){
                numberResult = 'G:' + number;
            }else if (number >= 61 && number <= 75){
                numberResult = 'O:' + number;
            }

            return numberResult;
        }
      
        generateNewNumber();

        if (checkNumberNotChecked()) {
            var newNumberDescription = getLetterByNumber(newNumber);
            setCurrentResult(newNumberDescription);
            setTotalResults(prevTotalResults => [...prevTotalResults, newNumber]);
        }
      
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
      

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateNumbers(min, max) {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push({ [i]: false });
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

        setCurrentResult('BOA SORTE');
        setTotalResults([]);
    };

    useEffect(() => {
        initializeBingoCard();
    }, []);

    return(
        <Container>
            <Result result={currentResult}/>
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