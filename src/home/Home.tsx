import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { WebSiteContext } from '../utils/WebsiteContext';
import avatar from '../pictures/avatar.png';
import { Button } from '@mui/material';
import { useNav } from '../customHooks/useNav';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding-bottom: 7rem;
  /*   margin-top: 5vh; */
  /*   background: #212121; */
  background: #5b5b5d;
`;

const Text = styled('div')`
  width: 30rem;
  margin-left: 1rem;
  max-width: 100%;
  line-height: 2em;
  overflow: hidden;
`;

export const MoreButton = styled(Button)({
  width: '12rem',
  height: '4rem',
  margin: '16px 0px',
  background: '#0192ae',
  borderRadius: '16px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    boxShadow: '1em 0.5em 1em #0004',
    background: '#0191aeb3'
  }
});

export default function Home() {
  const { ContentInfo } = useContext(WebSiteContext);
  const { Header } = ContentInfo;

  const aboutRef = useNav('Introduce');

  return (
    <section ref={aboutRef} id='introduceContainer'>
      <Wrapper>
        <div>
          <Text style={{ fontSize: '42px' }}>Hello!</Text>
          <Text>
            Én egy Full-stack fejlesztő vagyok, aki Mosolygós, Barátságos, Sportos, állatbarát, aki keresi a kihívásokat és a lehetőséget a
            fejlődésre. Ezért választottam hivatásomnak a szoftverfejlesztés világát, ahol nap mint nap lehetőségem van egy problémára megoldást
            keresni vagy új dolgot létrehozni.
          </Text>
          <MoreButton variant='contained'>Bővebben rólam</MoreButton>
        </div>
        <div>
          <img style={{ height: '30rem', width: 'auto', paddingRight: '15px', paddingLeft: '15px' }} alt='phone' src={avatar} />
        </div>
        {/*       {Header.titles.map((_title: any, index: number) => (
        <BigTitle key={index} style={{ color: _title.color }}></BigTitle>
      ))} */}
      </Wrapper>
    </section>
  );
}
