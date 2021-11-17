import React from 'react';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Home from './home/Home';
import Footer from './components/Footer';
import Introduce from './home/Introduce';
import Technologies from './components/Technologies';
import Hobbies from './components/Hobbies';
import Feedbacks from './components/Feedbacks';
import { Grid } from '@mui/material';
import { Router } from 'react-router-dom';
import history from './utils/history';
import FavouriteQoute from './components/FavouriteQoute';

const Body = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3c3a3d;
  max-height: 100vh;
  overflow: scroll;
  justify-content: center;
  color: white;
`;

export default function HomeInit() {
  return (
    <Router history={history}>
      <Body>
        <Home />
        <Grid container rowSpacing={1}>
          <Grid item xs={12} md={3}>
            <Introduce />
          </Grid>
          <Grid item xs={12} md={9}>
            <div style={{ backgroundColor: '#5b5b5d' }}>
              <FavouriteQoute />
              <Technologies />
              <Hobbies />
              <Feedbacks />
            </div>
          </Grid>
        </Grid>

        {/*  <Footer /> */}
      </Body>
    </Router>
  );
}
