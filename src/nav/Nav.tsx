import { Box } from '@mui/material';
import React, { useContext, useState } from 'react';
import { styled } from '@mui/system';
import { WebsiteContext } from '../context/WebsiteContext';
import Icon from '../utils/icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';

interface ActiveProps {
  readonly active: boolean | undefined;
}

const NavDiv = styled('div')`
  width: 100%;
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  justify-content: end;
  background-color: rgba(21, 21, 21, 0.7);
`;

const DropdownItem = styled(MenuItem)`
  margin: 5px 15px;
  font-size: 14px;
  cursor: ${(active: ActiveProps) => (active.active ? 'default' : 'pointer')};
  text-decoration: ${(active: ActiveProps) => (active.active ? 'underline' : 'none')};
  :hover {
    color: ${(active: ActiveProps) => (active.active ? '#0192ae' : 'white')};
    text-decoration: ${(active: ActiveProps) => (active.active ? 'underline' : 'none')};
  }
`;

const NavButton = styled(Link)`
  font-size: 18px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s ease;
  transition-delay: 0.25s;
  color: #0192ae;
  margin: 1em;
  padding-bottom: 0.3em;
  text-decoration: none;
  cursor: pointer;
`;

const FlagBox = styled(Box)`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto 10px;
  color: #0192ae;
  cursor: pointer;
  padding: 8px;
  border: 1px solid #0192ae;
  border-radius: 50%;
  :hover {
    background-color: #363636;
  }
`;

const Nav = () => {
  const { setLanguage, language, ContentInfo } = useContext(WebsiteContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavDiv>
      {ContentInfo.header.navLinks.map(({ navLinkId, scrollToId }: any, idx: number) => (
        <NavButton smooth to={`#${scrollToId}`} key={idx}>
          {navLinkId}
        </NavButton>
      ))}

      <React.Fragment>
        <FlagBox onClick={handleClick}>
          <Icon icon={'flag'} />
        </FlagBox>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              bgcolor: 'rgba(21, 21, 21, 0.7)',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 16,
                height: 16,
                ml: -0.5,
                mr: 1
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'rgba(21, 21, 21, 0.7)',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
          {ContentInfo.header.language.map(({ title, lang }: any, index: number) => (
            <DropdownItem
              active={language === lang}
              sx={{ color: language === lang ? '#0192ae' : 'white' }}
              onClick={() => {
                setLanguage(lang);
              }}>
              {title}
            </DropdownItem>
          ))}

          {/*           <DropdownItem
            active={language === 'en'}
            sx={{ color: language === 'en' ? '#0192ae' : 'white' }}
            onClick={() => {
              setLanguage('en');
            }}>
            English
          </DropdownItem>
          <DropdownItem
            active={language === 'hu'}
            sx={{ color: language === 'hu' ? '#0192ae' : 'white' }}
            onClick={() => {
              setLanguage('hu');
            }}>
            Hungarian
          </DropdownItem> */}
        </Menu>
      </React.Fragment>
    </NavDiv>
  );
};

export default Nav;
