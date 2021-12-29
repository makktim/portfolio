import React, { useContext } from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import Icon from '../utils/icons';
import { WebsiteContext } from '../context/WebsiteContext';

const HeaderTop = styled('div')`
  display: flex;
  flex-direction: column;
  background-color: rgba(21, 21, 21, 0.7);
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
  const { ContentInfo } = useContext(WebsiteContext);
  return (
    <HeaderTop>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {ContentInfo.footer.links.map((item: any) => (
          <Box sx={{ margin: 1 }}>
            <a style={{ color: 'white', textDecoration: 'none' }} href={item.link}>
              <Icon icon={item.icon} />
            </a>
          </Box>
        ))}
      </Box>
      <Typography variant='subtitle2' align='center' style={{}}>
        {ContentInfo.footer.title}
      </Typography>
    </HeaderTop>
  );
}
