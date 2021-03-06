import { Box, Grid, styled, Typography } from '@mui/material';
import picture5 from '../pictures/5.jpeg';
import picture16 from '../pictures/16.jpeg';
import picture13 from '../pictures/13.jpeg';
import picture2 from '../pictures/9.jpeg';
import picture11 from '../pictures/11.jpeg';
import picutres17 from '../pictures/leezr.jpeg';
import { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

export default function Hobbies() {
  const { ContentInfo } = useContext(WebsiteContext);

  const Gallery = styled(Grid)`
    transition: all 0.3s ease(gravity);
    cursor: zoom-in;
    height: 40vh;
    @media (max-width: 900px) {
      height: 100%;
    }
  `;

  const Img = styled('img')`
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.3s/2 ease(downhill);
    position: relative;
    box-shadow: 0 0 0 #0000;
    opacity: 0.67;
    filter: sepia(80%) hue-rotate(180deg);
    &:hover {
      opacity: 1;
      z-index: 1;
      box-shadow: 1em 1em 1em #0004;
      filter: sepia(0%) hue-rotate(0deg);
      border-radius: 5px;
      width: 125%;
      height: 110%;
      top: -10%;
    }
    @media (max-width: 900px) {
      width: 50%;
      margin-left: 25%;
      &:hover {
        width: 50%;
        height: 110%;
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      margin-left: 0px;
      &:hover {
        width: 125%;
        height: 110%;
        left: -10%;
      }
    }
  `;

  return (
    <Box id='hobbies'>
      <Typography variant='h4' align='center' style={{ color: 'white', paddingTop: '5rem' }}>
        {ContentInfo.hobbies.title}
      </Typography>
      <div style={{ width: '30%', margin: '8px auto 12px', border: '1px solid #0192ae', opacity: '0.5' }} />
      <Typography sx={{ margin: '0px 42px 42px' }} variant='subtitle2' align='center' style={{ color: 'white' }}>
        {ContentInfo.hobbies.description}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 5rem 5rem 5rem' }}>
        <Gallery container>
          <Grid item xs={12} md={2}>
            <Img src={picutres17} alt='' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Img src={picture5} alt='' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Img src={picture13} alt='' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Img src={picture16} alt='' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Img src={picture2} alt='' />
          </Grid>
          <Grid item xs={12} md={2}>
            <Img src={picture11} alt='' />
          </Grid>
        </Gallery>
      </Box>
    </Box>
  );
}
