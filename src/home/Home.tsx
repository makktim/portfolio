import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { WebsiteContext } from '../context/WebsiteContext';
import avatar from '../pictures/avatar.png';
import { HashLink as Link } from 'react-router-hash-link';
import { Typography } from '@mui/material';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 3rem;
  background: #5b5b5d;
`;

const Text = styled(Typography)`
  width: 25rem;
  margin-left: 1rem;
  max-width: 100%;
  line-height: 2em;
  overflow: hidden;
  @media (max-width: 900px) {
    width: auto;
  }
`;

export const MoreButton = styled(Link)({
  width: '10rem',
  height: '4rem',
  margin: '16px 12px',
  background: '#0192ae',
  borderRadius: '16px',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    boxShadow: '1em 0.5em 1em #0004',
    background: '#0191aeb3'
  }
});

const Img = styled('img')`
  height: 30rem;
  width: auto;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 900px) {
    height: 20rem;
  }
`;

export default function Home() {
  const { ContentInfo } = useContext(WebsiteContext);

  return (
    <Wrapper id='introduce'>
      <div>
        <Text style={{ fontSize: '42px' }}>Hello!</Text>
        <Text>{ContentInfo.home.description}</Text>
        <MoreButton to='#about'>{ContentInfo.home.button}</MoreButton>
      </div>
      <div>
        <Img alt='phone' src={avatar} />
      </div>
    </Wrapper>
  );
}
