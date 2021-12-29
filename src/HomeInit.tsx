import React from 'react';
import styled from 'styled-components';
import Home from './home/Home';
import Footer from './components/Footer';
import Introduce from './home/Introduce';
import Hobbies from './components/Hobbies';
import Feedbacks from './components/Feedbacks';
import { Grid } from '@mui/material';
import { Router } from 'react-router-dom';
import history from './utils/history';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Nav from './nav/Nav';

const Body = styled.div`
  width: 100%;
  /*   background-color: #3c3a3d; */
  justify-content: center;
  color: white;
  @media (max-width: 900px) {
    height: 100vh;
    overflow: scroll;
  }
`;

const BlocksContainer = styled.div`
  background-color: #5b5b5d;
  height: 100vh;
  overflow: scroll;
  @media (max-width: 900px) {
    overflow: auto;
  }
`;

export default function HomeInit() {
  return (
    <Router history={history}>
      <Body>
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={3}>
            <Introduce />
          </Grid>
          <Grid item xs={12} md={9}>
            <BlocksContainer>
              <Nav />
              <Home />
              <WorkExperience />
              <Skills />
              <Hobbies />
              <Feedbacks />
              <Footer />
            </BlocksContainer>
          </Grid>
        </Grid>
      </Body>
    </Router>
  );
}
