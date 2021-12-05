import React, { useContext } from 'react';
import styled from 'styled-components';
import profilePicture from '../pictures/profile/me_profile.jpg';
import phone from '../pictures/icons/telephone.png';
import chat from '../pictures/icons/chat.png';
import home from '../pictures/icons/home.png';
import { WebSiteContext } from '../utils/WebsiteContext';
import { Typography } from '@mui/material';

const Main = styled.div`
  display: flex;
  flex: 1 1;
  height: 100vh;
  /*   margin-top: 5vh; */
  overflow: scroll;
  flex-direction: column;
  background: #212121;
  /*   background-color: #3c3a3d; */
  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 900px) {
    margin-top: 20vh;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: baseline;
  justify-content: space-around;
  margin: 10px 0px;
`;

export default function Introduce() {
  const { ContentInfo } = useContext(WebSiteContext);
  const { Header } = ContentInfo;

  return (
    <Main>
      <img style={{ borderRadius: '50%', margin: '10px auto', width: 200, height: 200, objectFit: 'cover' }} src={profilePicture} alt='mypic' />
      <div style={{ fontSize: '30px', fontWeight: 600, margin: 'auto' }}>Makkai - Kása Tímea</div>
      <q style={{ color: '#0192ae', textAlign: 'center', margin: '5px' }}>Fordítsd arcodat a nap felé, mert akkor minden árnyék mögéd kerül</q>
      <div>
        <ContactBox>
          <img style={{ height: '24px' }} alt='phone' src={phone} />
          <Typography variant='body1' component='div' style={{ color: '#0192ae' }}>
            +3670/553-5813
          </Typography>
        </ContactBox>
        <ContactBox>
          <img style={{ height: '24px' }} alt='chat' src={chat} />
          <Typography variant='body1' component='div' style={{ color: '#0192ae' }}>
            kasatim01@gmail.com
          </Typography>
        </ContactBox>
        <ContactBox>
          <img style={{ height: '24px' }} alt='home' src={home} />
          <Typography variant='body1' component='div' style={{ color: '#0192ae' }}>
            1108 Bp, Hang utca 4.
          </Typography>
        </ContactBox>
        <ContactBox>
          <img style={{ height: '24px' }} alt='home' src={home} />
          <Typography variant='body1' component='div' style={{ color: '#0192ae' }}>
            Github Link
          </Typography>
        </ContactBox>
      </div>
      <div>
        <div style={{ borderBottom: '1px solid ', width: '50%', margin: '10px auto' }} />
        <Typography variant='subtitle2' gutterBottom component='div' style={{ margin: '20px 10px' }}>
          Egy Mosolygós, Barátságos, Sportos, állatbarát lány vagyok, aki keresi a kihívásokat és a lehetőséget a fejlődésre. Ezért választottam
          hivatásomnak a szoftverfejlesztés világát, ahol nap mint nap lehetőségem van egy problémára megoldást keresni vagy új dolgot létrehozni.
        </Typography>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
          MUNKATAPASZTALAT
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-around' }}>
          <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
            2020-
          </Typography>
          <Typography variant='subtitle1' gutterBottom component='div' style={{ margin: '0px 10px' }}>
            Cognityv Technologies Kft.
          </Typography>
        </div>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Pozíció: Full Stack fejlesztő (React, NodeJs, React Native
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', margin: ' 10px', justifyContent: 'space-around' }}>
          <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
            2015-2016
          </Typography>
          <Typography variant='subtitle1' gutterBottom component='div' style={{ margin: '0px 10px' }}>
            Trenkwalder Recruitment Kft.
          </Typography>
        </div>
        <Typography variant='subtitle2' gutterBottom component='div'>
          Pozíció: Projekt Munkaügyi koordinátor
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
          ISKOLAI VÉGZZETTSÉG
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-around' }}>
          <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
            2019-2020
          </Typography>
          <Typography variant='subtitle2' gutterBottom component='div' style={{ margin: '0px 10px' }}>
            CODECOL (Full Stack fejlesztői képzés)
          </Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: ' 10px', justifyContent: 'space-around' }}>
          <Typography variant='body1' gutterBottom component='div' style={{ color: '#0192ae' }}>
            2006-2011
          </Typography>
          <Typography variant='subtitle2' gutterBottom component='div' style={{ margin: '0px 10px' }}>
            Széchenyi István Gyak. Ker. Szakközép
          </Typography>
        </div>
      </div>
    </Main>
  );
}
