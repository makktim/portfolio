import { styled, Typography } from '@mui/material';
import get from 'lodash/get';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { WebsiteContext } from '../context/WebsiteContext';

const SkillTitle = styled(Typography)`
  display: flex;
  color: #fff;
  padding: 6px;
  &:hover,
  &:active {
    color: #0192ae;
  }
`;

export default function HardSkills() {
  const { ContentInfo } = useContext(WebsiteContext);
  const hardSkillsArray = get(ContentInfo, ['about', 'categories', 0, 'hardSkills']);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(hardSkillsArray).map(([key, item]: any, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          {item.map(({ name }: { name: string }, i: number) => (
            <Box key={i}>
              <SkillTitle>{name}</SkillTitle>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
