import { Grid, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import get from 'lodash/get';
import { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

interface CategoryProps {
  readonly category: boolean | undefined;
}

const SkillTitle = styled(Typography)`
  display: flex;
  color: #0192ae;
  cursor: crosshair;
  padding: 6px 0px;
  &:hover,
  &:active {
    filter: grayscale(0);
  }
`;

const SkillCaption = styled(Typography)`
  display: flex;
  color: #fff;
`;

export default function Projects() {
  const { ContentInfo } = useContext(WebsiteContext);
  const projectArray = get(ContentInfo, ['about', 'categories', 2, 'projects']);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(projectArray).map(([key, item]: any, index) => (
        <Grid sx={{ paddingLeft: ['1px', '1rem'] }} container key={index}>
          {item.map(({ name, technologies }: any, i: number) => (
            <Grid item xs={8} md={10} key={i}>
              <SkillTitle variant='h6'>{name}</SkillTitle>
              <SkillCaption variant='caption'>{technologies}</SkillCaption>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
