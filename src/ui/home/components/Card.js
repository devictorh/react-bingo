import React, {useState, useEffect} from "react";
import styled from "styled-components";

import Buttons from "./Button";

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
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    height: 80px;
    width: 80px;
    text-align: center;    
    border-radius: 5px;
    margin-bottom: 5px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    }
`

const BingoJoker = styled.div`
    display: flex;
    height: 80px;
    width: 80px;    
    margin-bottom: 5px;    
`

const TCol = styled.td`
    padding: 10px;
`

const Card = (props) => {
    
    const [bingoCard, setBingoCard] = useState({
        b: [],
        i: [],
        n: [],
        g: [],
        o: []
    })

    var arrNumbersCard = [];

    function checkAlreadyExistsNumber(number) {        
        if (arrNumbersCard.indexOf(number) !== -1) {
            return true;
        }
        return false;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var number = Math.floor(Math.random() * (max - min + 1)) + min;        

        if (checkAlreadyExistsNumber(number)) {            
            return getRandomIntInclusive(min, max)
        }else{            
            arrNumbersCard.push(number);
        }
        
        return number; 
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

    function getOrder(arr) {
        return arr.slice().sort(function(obj1, obj2) {
            const key1 = parseInt(Object.keys(obj1)[0]);
            const key2 = parseInt(Object.keys(obj2)[0]);
        
            return key1 - key2;
        });
    }

    function initializeBingoCard() {
        setBingoCard({
            'b': generateNumbers(1, 15),
            'i': generateNumbers(16, 30),
            'n': generateNumbers(31, 45),
            'g': generateNumbers(46, 60),
            'o': generateNumbers(61, 75),
        });

    };

    function setResult(letter, index) {
         setBingoCard(prevBingoCard => {
            const bingoCardClone = { ...prevBingoCard };
            const key = Object.keys(bingoCardClone[letter][index])[0];

            bingoCardClone[letter][index][key] = true;
            return bingoCardClone;
        });
    }

    function newCard() {
        initializeBingoCard();
    }

    function backToHomePage() {
        props.setModeGame('');
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
                            { bingoCard[letter].map((numberObj, index) => (
                                (index == 2 && letter == 'n') ? (
                                    <BingoJoker>
                                        <img src="./img/bingo.ico"/>
                                    </BingoJoker>
                                ) : (
                                    <BingoNumber 
                                        key={index}
                                        style={{
                                            backgroundColor: numberObj[Object.keys(numberObj)[0]] ? '#da1a29' : '#c6e5d9',
                                            color: numberObj[Object.keys(numberObj)[0]] ? 'white' : 'black'
                                        }}
                                        onClick={() => setResult(letter, index)}
                                    > 
                                        {Object.keys(numberObj)[0]}
                                    </BingoNumber>
                                )
                            ))}
                        </TCol>
                    ))}
                </tbody>
            </Grid>
            <Buttons 
                name1={'Nova cartela'} 
                name2={'Voltar'}
                click1={newCard}
                click2={backToHomePage}
            />
        </Container>
    ) 

}

export default Card;