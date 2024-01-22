import React, { useState } from "react";
import Header from '../../ui/home/components/Header';
import Game from '../../ui/home/components/Game';
import Card from "../../ui/home/components/Card";

import styled from 'styled-components';
import Options from '../../ui/home/components/Options';

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    height: 300px;
    margin: 0 auto;
`

const Action = styled.div`
    justify-content: space-between;
    box-sizing: border-box;
    align-items: flex-end;
    padding: 20px;    
`

const Home = () => {
    const [mode, setMode] = useState({'mode': 'sorter'});

    function setCurrentMode(mode){
        setMode({'mode': mode});        
    }

    return (
        <>
            <Header />
            <Container>
                <Options setMode={setCurrentMode}/>
            {mode.mode == '' && <Options setMode={setCurrentMode} />}
                <Action>  
                    {mode.mode == 'card' && <Card setModeGame={setCurrentMode} />}
                    {mode.mode == 'sorter' && <Game setModeGame={setCurrentMode} />}                    
                </Action>
            </Container>
        </>
    )
}

export default Home
