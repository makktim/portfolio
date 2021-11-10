import React from 'react';
import styled from 'styled-components';
import Home from './home/Home'
import Footer from './components/Footer'
import Introduce from './home/Introduce';


const Body = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  justify-content: center;
  color: white;
  h1 {
    font-size: 36px;
    font-weight: 800;
  }
  p {
    font-weight: 500;
  }
`;

export default function HomeInit() {
  return (
    <Body>
      <Home />
      <Introduce />
      <Footer />
    </Body>
  );
}
