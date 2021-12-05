import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../context/NavContext';

const NavButton = styled.span`
  font-size: 18px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease;
  transition-delay: 0.25s;
  color: #0192ae;
  margin: 1em;
  padding-bottom: 0.3em;
  cursor: pointer;
`;

const NavLink = ({ navLinkId, scrollToId }: any) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    const myElement = document.getElementById(scrollToId)!;
    myElement.scrollIntoView({ behavior: 'smooth' });
    setActiveNavLinkId(navLinkId);
  };

  return (
    <NavButton id={navLinkId} onClick={() => handleClick()}>
      {navLinkId}
    </NavButton>
  );
};

export default NavLink;
