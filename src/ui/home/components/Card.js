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
    table-layout: fixed; /* Define a largura das colunas de forma fixa */
`

const Thead = styled.th`
    padding: 10px;
    font-family: Blockt;
    text-align: center;    
    font-size: 42px;   
    
    div {
        border-radius: 5px;
        background-color: rgb(
            ${() => Math.floor(Math.random() * 256)},
            ${() => Math.floor(Math.random() * 256)},
            ${() => Math.floor(Math.random() * 256)}
        );
    }
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
    margin: 3px;
    font-weight: bold;

    @media (max-width: 600px) {
        height: 15vw;
        width: 14vw;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
    }
`

const BingoJoker = styled.div`
    display: flex;
    height: 80px;
    width: 80px;    
    margin: 3px;   
    
    @media (max-width: 600px) {
        height: 15vw;
        width: 14vw;
    }
`

const TCol = styled.td`
    padding: 10px;
`

const ButtonNewCard = styled.button`
    cursor: pointer;
    border-style: none;
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border-radius: 10% 10% / 10% 10%;
    font-family: molot;
    font-size: 18px;
    

    &:hover {
       box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    }
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

    function ensureOrder(arr) {
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
            return {
                ...prevBingoCard,
                [letter]: prevBingoCard[letter].map((numberObj, i) => {
                    if (i === index) {
                        const number = parseInt(Object.keys(numberObj)[0]);
                        return {
                            [number]: !numberObj[number],
                        };
                    }
                    return numberObj;
                }),
            };
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
                        <Thead><div>B</div></Thead>
                        <Thead><div>I</div></Thead>
                        <Thead><div>N</div></Thead>
                        <Thead><div>G</div></Thead>
                        <Thead><div>O</div></Thead>
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
            <ButtonNewCard onClick={() => newCard()}>Nova cartela</ButtonNewCard>
        </Container>
    ) 

}

export default Card;