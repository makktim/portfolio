import React from 'react';
import styled from 'styled-components';
import Home from './home/Home';
import Footer from './components/Footer';
import Introduce from './home/Introduce';
import Technologies from './components/Technologies';
import Hobbies from './components/Hobbies';
import Feedbacks from './components/Feedbacks';

const Body = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  justify-content: center;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  h1 {
    font-size: 36px;
    font-weight: 800;
  }
  p {
    font-weight: 500;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function HomeInit() {
  return (
    <Body>
      <Home />
      <Container>
        <Introduce />
        <div style={{ width: '100%', backgroundColor: '#5b5b5d' }}>
          <Technologies />
          <Hobbies />
          <Feedbacks />
        </div>
      </Container>
      {/*  <Footer /> */}
    </Body>
  );
}
