import React from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';

export const navLinks = [
  { navLinkId: 'Introduce', scrollToId: 'introduceContainer' },
  { navLinkId: 'WorkExperience', scrollToId: 'workExperience' },
  { navLinkId: 'IntroduceImages', scrollToId: 'introduceImages' },
  { navLinkId: 'Technologies', scrollToId: 'technologies' },
  { navLinkId: 'Hobbies', scrollToId: 'hobbiesImages' }
];

const NavDiv = styled.div`
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: end;
  background-color: rgba(21, 21, 21, 0.7);
`;

const Nav = () => {
  return (
    <NavDiv>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
    </NavDiv>
  );
};

export default Nav;
