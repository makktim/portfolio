import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const HeaderTop = styled.div`
  display: flex;
  background-color: #212121;
  flex-grow: 1;
  height: 100px;
  margin: auto;
  justify-content: center;
  z-index: 11;
  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
    margin: 0;
  }
`;

export default function Footer() {
  return <HeaderTop>Készítette Makkai-Kása Tímea</HeaderTop>;
}
