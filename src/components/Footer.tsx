import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const HeaderTop = styled.div`
  display: flex;
  background-color: #5b5b5d;
  flex-grow: 1;
  padding: 20px 180px;
  justify-content: space-between;
  align-items: center;
  z-index: 101;
  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    padding: 20px 30px;
    margin: 0;
  }
`;

const Nav = styled.div`
  display: flex;
  padding-left: 12%;
  color: white;
  background-color: #5b5b5d;
  align-items: baseline;
  @media (max-width: 1200px) {
    padding-left: 1px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

/* const Logo = styled(Link)`
display: flex;
img {
  width: auto;
  height: 35px;
}
`;

const NavLinkTo = styled(Link)`
display: flex;
align-items: center;
margin: 0 0 0 30px;
text-decoration: none;
color: inherit;
font-size: 17px;
transition: 0.2s ease;
cursor: pointer;
:hover {
  text-decoration: none;
  color:'#ffffff';
}
@media (max-width: 1024px) {
  font-size: 18px;
  margin: 0 0 0 20px;
}
@media (max-width: 768px) {
  margin: 2% 15% 2% 1%;
}
@media (max-width: 375px) {
  font-size: 18px;
}
`; */

export default function Footer() {
  return (
    <HeaderTop>
      <Router>
        <Link to='/'>{/*  <img alt="logo" src={require('../images/cognityv_logo_landscape_inverse_rgb.png')} /> */}</Link>
      </Router>
    </HeaderTop>
  );
}
