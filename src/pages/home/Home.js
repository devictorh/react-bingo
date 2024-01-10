import React from 'react';
import Footer from "../../ui/home/components/Footer"
import Header from '../../ui/home/components/Header';
import CheckResult from '../../ui/home/components/CheckResult';

import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: 100vh; /* 100% da altura da viewport */
`

const Action = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <Action>
                    <CheckResult/>
                </Action>
            </Container>
            <Footer />
        </>        
    )
}

export default Home