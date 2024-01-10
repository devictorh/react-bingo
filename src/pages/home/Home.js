import React from 'react';
import Footer from "../../ui/home/components/Footer"
import Header from '../../ui/home/components/Header';
import CheckResult from '../../ui/home/components/Table';
import Buttons from '../../ui/home/components/Button';
import Result from '../../ui/home/components/Result';

import styled from 'styled-components';

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
    return (
        <>
            <Header />
            <Container>
                <Result />
                <Action>
                    <CheckResult/>                    
                </Action>
                <Buttons />
            </Container>            
            <Footer />
        </>        
    )
}

export default Home
