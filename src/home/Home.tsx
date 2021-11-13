import React, { useContext } from 'react';
import styled from 'styled-components';
import backgroundImage from '../pictures/mot2.jpeg';
import { WebSiteContext } from '../utils/WebsiteContext';

const Main = styled.div`
  display: flex;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.8;
  height: 400px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 0 180px 0;
  }
`;

const Title = styled.div`
  letter-spacing: 1px;
  font-family: Cognityv-regular;
  font-size: 13px;
  text-transform: uppercase;
  padding-top: 20px;
  text-align: center;
  padding-bottom: 120px;
`;

const BigTitle = styled.div`
  font-size: 39px;
  line-height: 45px;
  letter-spacing: 2px;
  text-align: center;
  display: flex;
  align-content: flex-end;
  align-items: flex-end;
  justify-content: flex-end;
`;

export default function Home() {
  const { ContentInfo } = useContext(WebSiteContext);
  const { Header } = ContentInfo;

  return (
    <Main>
      {/*       {Header.titles.map((_title: any, index: number) => (
        <BigTitle key={index} style={{ color: _title.color }}>
          <div>{_title.title}</div>
        </BigTitle>
      ))}
      <Title style={{ textAlign: 'center' }}>{Header.description}</Title> */}
    </Main>
  );
}
