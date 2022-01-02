import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import get from 'lodash/get';
import { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

const SkillTitle = styled(Typography)`
  display: flex;
  color: white;
  padding: 6px 0px;
  cursor: crosshair;
  color: #0192ae;
  &:hover,
  &:active {
    filter: grayscale(0);
  }
`;

const SkillCaption = styled(Typography)`
  display: flex;
  color: #fff;
`;

export default function Interests() {
  const { ContentInfo } = useContext(WebsiteContext);
  const interestArray = get(ContentInfo, ['about', 'categories', 3, 'interest']);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(interestArray).map(([key, item]: any, index) => (
        <Grid sx={{ paddingLeft: '1rem' }} container key={index}>
          {item.map(({ name, technologies }: any, i: number) => (
            <Grid item md={10} key={i}>
              <SkillTitle variant='h6'>{name}</SkillTitle>
              <SkillCaption variant='caption'>{technologies}</SkillCaption>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
