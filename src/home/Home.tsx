import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { WebsiteContext } from '../context/WebsiteContext';
import avatar from '../pictures/avatar.png';
import { Button } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 7rem;
  background: #5b5b5d;
`;

const Text = styled('div')`
  width: 25rem;
  margin-left: 1rem;
  max-width: 100%;
  line-height: 2em;
  overflow: hidden;
`;

export const MoreButton = styled(Link)({
  width: '12rem',
  height: '4rem',
  margin: '16px 0px',
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
        <img style={{ height: '30rem', width: 'auto', paddingRight: '15px', paddingLeft: '15px' }} alt='phone' src={avatar} />
      </div>
    </Wrapper>
  );
}
