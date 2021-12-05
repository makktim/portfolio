import { Card, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

interface CategoryProps {
  readonly category: boolean | undefined;
}

const SkillTitle = styled(Typography)`
  display: flex;
  filter: grayscale(100%);
  color: #0192ae;
  color: white;
  padding: '6px 0px';
  filter: ${({ category }: CategoryProps) => (category ? 'grayscale(0)' : 'grayscale(100%)')};
  &:hover,
  &:active {
    filter: grayscale(0);
  }
`;

const SkillCaption = styled(Typography)`
  display: flex;
  filter: grayscale(100%);
  color: #0192ae;
  filter: ${({ category }: CategoryProps) => (category ? 'grayscale(0)' : 'grayscale(100%)')};
  &:hover,
  &:active {
    filter: grayscale(0);
  }
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
  const [categoryHover, setCategoryHover] = useState(false);

  const HardSkills = {
    first: [
      { name: 'Cognityv Web / Mobil', technologies: 'React / React Native / Node Js' },
      { name: 'Polinvent Kalkulátor', technologies: 'React / Node Js' },
      { name: 'www.polinvent.com', technologies: 'React / Gatsby' }
    ],
    second: [
      { name: 'www.cognityv.com', technologies: 'React / Gatsby' },
      { name: 'www.bambobaby.com', technologies: 'Wordpress' },
      { name: 'www.mkdekor.com', technologies: 'Wordpress' }
    ]
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
      {Object.entries(HardSkills).map(([key, item], index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
          {item.map(({ name, technologies }: any, i: number) => (
            <Box key={i} /* category={categoryHover} */>
              <SkillTitle variant='h6' category={categoryHover}>
                {name}
              </SkillTitle>
              <SkillCaption category={categoryHover} variant='caption' align='center'>
                {technologies}
              </SkillCaption>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
