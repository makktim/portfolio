import { Card, styled, Typography } from '@mui/material';
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

const ItemBox = styled(Card)`
  background-color: #3c3a3d;
  margin: 6px;
  padding: 16px;
  transition: 0.25s;
  cursor: pointer;
  opacity: ${({ category }: CategoryProps) => (category ? '0.9' : '0.5')};
  &:hover {
    transition: 0.25s;
    margin-left: 1rem;
  }
`;

export default function Projects() {
  const { ContentInfo } = useContext(WebsiteContext);
  const projectArray = get(ContentInfo, ['about', 'categories', 2, 'projects']);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(projectArray).map(([key, item]: any, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          {item.map(({ name, technologies }: any, i: number) => (
            <Box key={i} /* category={categoryHover} */>
              <SkillTitle variant='h5'>{name}</SkillTitle>
              <SkillCaption variant='caption' align='center'>
                {technologies}
              </SkillCaption>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
