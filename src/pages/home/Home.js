import React from 'react';
import Footer from "../../ui/home/components/Footer"
import Header from '../../ui/home/components/Header';
import CheckResult from '../../ui/home/components/CheckResult';
import Buttons from '../../ui/home/components/FrameAction';

import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100vh;
`

const Action = styled.div`
    position: absolute;    
    left: 50%;
    transform: translate(-50%);
`

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Action>
                    <CheckResult/>
                    <Buttons />
                </Action>
            </Container>
            <Footer />
        </>        
    )
}

export default Home