import React, { useContext } from 'react';
import styled from 'styled-components';
import profilePicture from '../pictures/omid-armin-a5EbQpl-IHw-unsplash.jpg';
import phone from '../pictures/icons/telephone.png';
import chat from '../pictures/icons/chat.png';
import home from '../pictures/icons/home.png';
import { WebSiteContext } from '../utils/WebsiteContext';

const Main = styled.div`
  display: flex;
  flex: 1 1;
  min-width: 350px;
  flex-direction: column;
  background-color: #3c3a3d;
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
      <img style={{ borderRadius: '50%', margin: '10px auto' }} src={profilePicture} alt='mypic' height='auto' width='250px' />
      <div style={{ fontSize: '30px', fontWeight: 600, margin: 'auto' }}>Makkai - Kása Tímea</div>
      <div>
        <ContactBox>
          <img style={{ height: '24px' }} alt='phone' src={phone} />
          <div style={{ color: '#0192ae' }}>+3670/553-5813</div>
        </ContactBox>
        <ContactBox>
          <img style={{ height: '24px' }} alt='chat' src={chat} />
          <div style={{ color: '#0192ae' }}>kasatim01@gmail.com</div>
        </ContactBox>
        <ContactBox>
          <img style={{ height: '24px' }} alt='home' src={home} />
          <div style={{ color: '#0192ae' }}>1108 Bp, Hang utca 4.</div>
        </ContactBox>
      </div>
      <div>
        <div style={{ borderBottom: '1px solid #0192ae', width: '50%', margin: '10px auto' }} />
        <ContactBox style={{ margin: '20px 10px' }}>
          Egy Mosolygós, Barátságos, Sportos, állatbarát lány vagyok, aki keresi a kihívásokat és a lehetőséget a fejlődésre. Ezért választottam
          hivatásomnak a szoftverfejlesztés világát, ahol nap mint nap lehetőségem van egy problémára megoldást keresni vagy új dolgot létrehozni.
        </ContactBox>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <div style={{ color: '#0192ae' }}>MUNKATAPASZTALAT</div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: ' 10px', justifyContent: 'space-around' }}>
          <div style={{ color: '#0192ae' }}>2015-2016</div>
          <div style={{ margin: '0px 10px' }}>Trenkwalder Recruitment Kft.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
          <div>Pozíció: Projekt Munkaügyi koordinátor</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-around' }}>
          <div style={{ color: '#0192ae' }}>2020-</div>
          <div style={{ margin: '0px 10px' }}>Cognityv Technologies Kft.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
          <div>Pozíció: Full Stack fejlesztő (React, NodeJs, React Native</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <div style={{ color: '#0192ae' }}>ISKOLAI VÉGZZETTSÉG</div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: ' 10px', justifyContent: 'space-around' }}>
          <div style={{ color: '#0192ae' }}>2006-2011</div>
          <div style={{ margin: '0px 10px' }}>Széchenyi István Gyak. Ker. Szakközép</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: '10px', justifyContent: 'space-around' }}>
          <div style={{ color: '#0192ae' }}>2019-2020</div>
          <div style={{ margin: '0px 10px' }}>CODECOL (Full Stack fejlesztői képzés)</div>
        </div>
      </div>
    </Main>
  );
}
